"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMoviesByDateAndTime = exports.createTransaction = void 0;
const fs_1 = __importDefault(require("fs"));
const createTransaction = (req, res) => {
    try {
        const { uid, movie_id, time, total_seat, date } = req.body;
        const db = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        const findUser = db.users.filter((user) => {
            return user.uid === uid;
        });
        if (findUser.length === 0)
            throw { message: 'User Not Found', status: 406 };
        const findMovie = db.movies.filter((movie) => {
            return movie.id === movie_id && date >= movie.start_showing && date <= movie.end_showing && movie.times.includes(time);
        });
        if (findMovie.length === 0)
            throw { message: 'Movie is Not Showing on The Selected Date', status: 406 };
        let totalSeatAvailable = findMovie[0].total_seat;
        db.transactions.forEach((transaction) => {
            if (transaction.movie_id === movie_id && transaction.time === time && transaction.date === date)
                totalSeatAvailable -= transaction.total_seat;
        });
        if (total_seat > totalSeatAvailable)
            throw { message: 'Seat Not Available', status: 406 };
        db.transactions.push({
            uid,
            movie_id,
            time,
            total_seat,
            date
        });
        fs_1.default.writeFileSync('./db/db.json', JSON.stringify(db));
        const isWeekend = new Date(date).getDay() === 0 || new Date(date).getDay() === 6 ? true : false;
        res.status(201).json({
            error: false,
            message: 'Transaction Success',
            data: {
                uid,
                movie_id,
                time,
                total_seat,
                date,
                price: isWeekend ? findMovie[0].prices[1].weekend * total_seat : findMovie[0].prices[0].weekday * total_seat,
                va_number: Date.now()
            }
        });
    }
    catch (error) {
        res.status(error.status || 500).json({
            error: true,
            message: error.message,
            data: {}
        });
    }
};
exports.createTransaction = createTransaction;
const findMoviesByDateAndTime = (req, res) => {
    try {
        const { date, time } = req.query;
        const db = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        const findMoviesWithStatus = db.movies.map((movie) => {
            let seat_available = movie.total_seat;
            db.transactions.forEach((transaction) => {
                if (transaction.date === date || transaction.time === time)
                    seat_available -= transaction.total_seat;
            });
            return Object.assign(Object.assign({}, movie), { seat_available, status: date < movie.start_showing ? 'UPCOMING' : date >= movie.start_showing && date <= movie.end_showing ? 'ON_SHOWING' : 'ENDED' });
        });
        res.status(200).json({
            error: false,
            message: 'Find Movies by Query Success',
            data: findMoviesWithStatus
        });
    }
    catch (error) {
    }
};
exports.findMoviesByDateAndTime = findMoviesByDateAndTime;
