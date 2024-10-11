"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Body Parser ---> Supaya Dapat Mengambil Data dari Request (Request Body)
const port = 5000;
app.get('/', (req, res) => {
    //   DO ANYTHING
    res.send('<h1>Welcome to Express Typescript Server</h1>');
});
app.get('/products', (req, res) => {
    try {
        // Comunicate DB to GET Data Products
        let products = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        res.status(200).json({
            error: false,
            message: 'Get Products Success',
            data: products.products
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: 'Something Went Wrong',
            data: [{}]
        });
    }
});
app.post('/products', (req, res) => {
    try {
        const { name, price } = req.body;
        if (!name || !price)
            throw { message: 'Name or Price Must Be Filled!', status: 406 };
        let products = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
        products.products.push({ id: Date.now(), name, price });
        fs_1.default.writeFileSync('./db/db.json', JSON.stringify(products));
        res.status(201).json({
            error: false,
            message: 'Create Product Success',
            data: { name, price }
        });
    }
    catch (error) {
        res.status(error.status || 500).json({
            error: true,
            message: error.message,
            data: null
        });
    }
});
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    let products = JSON.parse(fs_1.default.readFileSync('./db/db.json', 'utf-8'));
    products.products.forEach((item, index) => {
        if (item.id === Number(id)) {
            item.name = name;
            item.price = price;
        }
    });
    fs_1.default.writeFileSync('./db/db.json', JSON.stringify(products));
    res.status(201).json({
        error: false, message: 'Update Product Success', data: { name, price }
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
