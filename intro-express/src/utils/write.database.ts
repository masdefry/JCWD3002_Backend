import fs from 'fs';
import { IExpenses } from './../controllers/expenses.controller/types';

export const writeDatabase = (dataToSave: {expenses: IExpenses[]}) => {
    return fs.writeFileSync('./db/database.json', JSON.stringify(dataToSave))
}