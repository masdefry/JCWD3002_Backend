import { Request, Response } from "express";
import fs from 'fs';

export const createTransaction = (req: Request, res: Response) => {
    try {
        const {uid, movie_id, time, total_seat, date} = req.body

        const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

        const findUser = db.users.filter((user: any) => {
            return user.uid === uid 
        })

        if(findUser.length === 0) throw {message: 'User Not Found', status: 406}

        const findMovie = db.movies.filter((movie: any) => {
            return movie.id === movie_id && date >= movie.start_showing && date <= movie.end_showing && movie.times.includes(time)
        })

        if(findMovie.length === 0) throw {message: 'Movie is Not Showing on The Selected Date', status: 406}

        let totalSeatAvailable = findMovie[0].total_seat
        db.transactions.forEach((transaction: any) => {
            if(transaction.movie_id === movie_id && transaction.time === time && transaction.date === date) totalSeatAvailable -= transaction.total_seat
        })

        if(total_seat > totalSeatAvailable) throw {message: 'Seat Not Available', status: 406}

        db.transactions.push({
            uid, 
            movie_id, 
            time, 
            total_seat, 
            date
        })

        fs.writeFileSync('./db/db.json', JSON.stringify(db))

        const isWeekend = new Date(date).getDay() === 0 || new Date(date).getDay() === 6? true : false

        res.status(201).json({
            error: false, 
            message: 'Transaction Success', 
            data: {
                uid, 
                movie_id, 
                time, 
                total_seat, 
                date, 
                price: isWeekend? findMovie[0].prices[1].weekend * total_seat : findMovie[0].prices[0].weekday * total_seat, 
                va_number: Date.now()
            }
        })
    } catch (error: any) {
        res.status(error.status || 500).json({
            error: true, 
            message: error.message, 
            data: {}
        })
    }
}

export const findMoviesByDateAndTime = (req: Request, res: Response) => {
    try {
        const {date, time} = req.query

        const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

        const findMoviesWithStatus = db.movies.map((movie: any) => {
            let seat_available = movie.total_seat
            
            db.transactions.forEach((transaction: any) => {
                if(transaction.date === date || transaction.time === time) seat_available -= transaction.total_seat
            })

            return {
                ...movie, 
                seat_available,
                status: date! < movie.start_showing? 'UPCOMING' : date! >= movie.start_showing && date! <= movie.end_showing? 'ON_SHOWING' : 'ENDED'
            }
        })

        res.status(200).json({
            error: false, 
            message: 'Find Movies by Query Success', 
            data: findMoviesWithStatus
        })
    } catch (error) {
        
    }
}