import serverless from 'serverless-http'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
// import * as productController from './controllers/product.controller'
// import * as shoppingCartController from './controllers/shopping-cart.controller'
import { root, gqlSchema } from './controllers/graphql.controller'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/graphql', graphqlHTTP({ schema: gqlSchema, rootValue: root, graphiql: true }))

// app.get('/api/v1/products', async (req, res) => productController.getProducts(req, res))
// app.post('/api/v1/shoppingcart', async (req, res) => shoppingCartController.calculateTotal(req, res))

export const handler = serverless(app)
