"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findExpensesByCategory = exports.findExpensesByDate = exports.deleteExpense = exports.editExpense = exports.createExpense = exports.findExpenseDetails = exports.findExpenses = void 0;
const read_database_1 = require("../../utils/read.database");
const write_database_1 = require("../../utils/write.database");
const findExpenses = (req, res) => {
    try {
        const expenses = (0, read_database_1.readDatabase)();
        res.status(200).json({
            error: false,
            message: 'Get Expenses Success',
            data: expenses.expenses
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something Went Wrong',
            data: {}
        });
    }
};
exports.findExpenses = findExpenses;
const findExpenseDetails = (req, res) => {
    try {
        const { id } = req.params;
        const expenses = (0, read_database_1.readDatabase)();
        const expenseDetails = expenses.expenses.filter((expense) => {
            return expense.id === Number(id);
        });
        res.status(200).json({
            error: false,
            message: 'Get Expense Details Success',
            data: expenseDetails
        });
    }
    catch (error) {
    }
};
exports.findExpenseDetails = findExpenseDetails;
const createExpense = (req, res) => {
    try {
        const { title, nominal, category, date } = req.body;
        if (!title || !nominal || !category || !date)
            throw { message: 'Data Must be Complete', status: 406 };
        const expenses = (0, read_database_1.readDatabase)();
        expenses.expenses.push({
            id: Date.now(),
            title,
            nominal,
            type: category.toLowerCase() === 'salary' ? 'INCOME' : 'EXPENSE',
            category,
            date
        });
        (0, write_database_1.writeDatabase)(expenses);
        res.status(201).json({
            error: false,
            message: 'Create Expense Success',
            data: {
                title,
                nominal,
                category,
                date
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
exports.createExpense = createExpense;
const editExpense = (req, res) => {
    try {
        const { title, nominal, category, date } = req.body;
        const { id } = req.params;
        const expenses = (0, read_database_1.readDatabase)();
        for (let i = 0; i < expenses.expenses.length; i++) {
            if (expenses.expenses[i].id === Number(id)) {
                expenses.expenses[i].title = title;
                expenses.expenses[i].nominal = nominal;
                expenses.expenses[i].category = category;
                expenses.expenses[i].date = date;
                break;
            }
        }
        (0, write_database_1.writeDatabase)(expenses);
        res.status(200).json({
            error: false,
            message: `Update Expense with Id=${id} Sucess`,
            data: { title, nominal, category, date }
        });
    }
    catch (error) {
    }
};
exports.editExpense = editExpense;
const deleteExpense = (req, res) => {
    try {
        const { id } = req.params;
        const expenses = (0, read_database_1.readDatabase)();
        for (let i = 0; i < expenses.expenses.length; i++) {
            if (expenses.expenses[i].id === Number(id)) {
                expenses.expenses.splice(i, 1);
                break;
            }
        }
        (0, write_database_1.writeDatabase)(expenses);
        res.status(200).json({
            error: false,
            message: `Delete Expense with Id=${id} Success`,
            data: {}
        });
    }
    catch (error) {
    }
};
exports.deleteExpense = deleteExpense;
const findExpensesByDate = (req, res) => {
    try {
        const { start_date, end_date } = req.query;
        const expenses = (0, read_database_1.readDatabase)();
        let totalExpensesByDateRange = 0;
        expenses.expenses.forEach((expense) => {
            if (expense.date >= start_date && expense.date <= end_date)
                totalExpensesByDateRange += expense.nominal;
        }); // [{}] / [{}{}] / dst
        res.status(200).json({
            error: false,
            message: 'Get Expenses by Date Range Sucess',
            data: totalExpensesByDateRange
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.findExpensesByDate = findExpensesByDate;
const findExpensesByCategory = (req, res) => {
    try {
        const { category } = req.query;
        const expenses = (0, read_database_1.readDatabase)();
        const findExpensesByCategory = expenses.expenses.filter((expense) => {
            return expense.category === category;
        });
        res.status(200).json({
            error: false,
            message: 'Get Expenses by Category Sucess',
            data: findExpensesByCategory
        });
    }
    catch (error) {
    }
};
exports.findExpensesByCategory = findExpensesByCategory;
