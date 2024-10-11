import express, { Express, Request, Response } from 'express';
import fs from 'fs';

const app: Express = express();
app.use(express.json()) // Body Parser ---> Supaya Dapat Mengambil Data dari Request (Request Body)
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  //   DO ANYTHING
  res.send('<h1>Welcome to Express Typescript Server</h1>');
});

app.get('/products', (req: Request, res: Response) => {
    try {
        // Comunicate DB to GET Data Products
        let products = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

        res.status(200).json(
            {
                error: false, 
                message: 'Get Products Success', 
                data: products.products
            }
        )
    } catch (error) {
        res.status(500).json({
            error: true, 
            message: 'Something Went Wrong', 
            data: [{}]
        })
    }
})

app.post('/products', (req: Request, res: Response) => {
    try {
        const {name, price} = req.body 
        
        if(!name || !price) throw {message: 'Name or Price Must Be Filled!', status: 406}
     
        let products = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

        products.products.push({id: Date.now(), name, price})

        fs.writeFileSync('./db/db.json', JSON.stringify(products))

        res.status(201).json({
            error: false, 
            message: 'Create Product Success', 
            data: {name, price}
        })
    } catch (error: any) { 
        res.status(error.status || 500).json({
            error: true, 
            message: error.message, 
            data: null
        })
    }
})

app.put('/products/:id', (req: Request, res: Response) => {
    const {id} = req.params 
    const {name, price} = req.body 

    let products = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

    products.products.forEach((item: any, index: number) => {
        if(item.id === Number(id)){
            item.name = name 
            item.price = price 
        }
    })

    fs.writeFileSync('./db/db.json', JSON.stringify(products))

    res.status(201).json({
        error: false, message: 'Update Product Success', data: {name, price}
    })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
