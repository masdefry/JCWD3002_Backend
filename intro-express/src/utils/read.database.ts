import fs from 'fs';

export const readDatabase = () => {
    return JSON.parse(fs.readFileSync('./db/database.json', 'utf-8'))
}