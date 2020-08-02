import serverless from 'serverless-http'
import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { root, gqlSchema } from './controllers/graphql.controller'

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/graphql', graphqlHTTP({ schema: gqlSchema, rootValue: root, graphiql: true }))

export const handler = serverless(app)
