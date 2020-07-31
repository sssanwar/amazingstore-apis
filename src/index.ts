import serverless from 'serverless-http'
import express from 'express'
import * as productController from './controllers/product.controller'
import * as shoppingCartController from './controllers/shopping-cart.controller'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/v1/products', async (req, res) => productController.getProducts(req, res))
app.post('/api/v1/shoppingcart', async (req, res) => shoppingCartController.calculateTotal(req, res))

//app.listen(3000, () => console.log(`Listening on: 3000`));
export const handler = serverless(app)
