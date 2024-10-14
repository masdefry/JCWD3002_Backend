import express, { Express, Request, Response } from 'express';

const app: Express = express();
app.use(express.json()) // Body Parser ---> Supaya Dapat Mengambil Data dari Request (Request Body)
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  //   DO ANYTHING
  res.send('<h1>Welcome to Express Typescript Server</h1>');
});

import router from './routers';
app.use(router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
