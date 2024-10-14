import { Request, Response } from "express";
import { readDatabase } from "../../utils/read.database";
import { writeDatabase } from "../../utils/write.database";
import { IExpenses } from "./types";

export const findExpenses = (req: Request, res: Response) => {
    try {
        const expenses = readDatabase()
        
        res.status(200).json({
            error: false, 
            message: 'Get Expenses Success', 
            data: expenses.expenses
        })
    } catch (error: any) {
        res.status(500).json({
            error: true, 
            message: 'Something Went Wrong', 
            data: {}
        })
    }
}

export const findExpenseDetails = (req: Request, res: Response) => {
    try {
        const {id} = req.params

        const expenses = readDatabase()

        const expenseDetails = expenses.expenses.filter((expense: IExpenses) => {
            return expense.id === Number(id)
        })

        res.status(200).json({
            error: false, 
            message: 'Get Expense Details Success', 
            data: expenseDetails
        })
    } catch (error) {
        
    }
}

export const createExpense = (req: Request, res: Response) => {
    try {
        const {title, nominal, category, date} = req.body 

        if(!title || !nominal || !category || !date) throw { message: 'Data Must be Complete', status: 406 }

        const expenses = readDatabase()

        expenses.expenses.push({
            id: Date.now(),
            title, 
            nominal,
            type: category.toLowerCase() === 'salary'? 'INCOME' : 'EXPENSE', 
            category, 
            date 
        })

        writeDatabase(expenses)

        res.status(201).json({
            error: false, 
            message: 'Create Expense Success', 
            data: {
                title, 
                nominal, 
                category, 
                date
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

export const editExpense = (req: Request, res: Response) => {
    try {
        const { title, nominal, category, date } = req.body 
        const {id} = req.params

        const expenses = readDatabase()

        for(let i=0; i<expenses.expenses.length; i++){
            if(expenses.expenses[i].id === Number(id)){
                expenses.expenses[i].title = title 
                expenses.expenses[i].nominal = nominal
                expenses.expenses[i].category = category
                expenses.expenses[i].date = date 
                break;
            }
        }

        writeDatabase(expenses)

        res.status(200).json({
            error: false, 
            message: `Update Expense with Id=${id} Sucess`, 
            data: { title, nominal, category, date }
        })
    } catch (error) {
        
    }
}

export const deleteExpense = (req: Request, res: Response) => {
    try {
        const {id} = req.params 

        const expenses = readDatabase()

        for(let i=0; i<expenses.expenses.length; i++){
            if(expenses.expenses[i].id === Number(id)){
                expenses.expenses.splice(i, 1)
                break;
            }
        }

        writeDatabase(expenses)

        res.status(200).json({
            error: false, 
            message: `Delete Expense with Id=${id} Success`,
            data: {}
        })
    } catch (error) {
        
    }
}

export const findExpensesByDate = (req: Request, res: Response) => {
    try {
        const {start_date, end_date} = req.query 
        
        const expenses = readDatabase()

        let totalExpensesByDateRange = 0
        expenses.expenses.forEach((expense: IExpenses) => {
            if(expense.date >= start_date! && expense.date <= end_date!) totalExpensesByDateRange += expense.nominal
        }) // [{}] / [{}{}] / dst


        res.status(200).json({
            error: false, 
            message: 'Get Expenses by Date Range Sucess', 
            data: totalExpensesByDateRange
        })
    } catch (error) {
        console.log(error)
    }
}

export const findExpensesByCategory = (req: Request, res: Response) => {
    try {
        const {category} = req.query

        const expenses = readDatabase()

        const findExpensesByCategory = expenses.expenses.filter((expense: IExpenses) => {
            return expense.category === category
        })

        res.status(200).json({
            error: false, 
            message: 'Get Expenses by Category Sucess',
            data: findExpensesByCategory
        })
    } catch (error) {
        
    }
}