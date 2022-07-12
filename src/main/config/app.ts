import { setupMiddlewares } from '@/main/config/middlewares'
import { setupRoutes } from '@/main/config/routes'
import express from 'express'
import * as dotenv from 'dotenv'

const app = express()
dotenv.config()
setupMiddlewares(app)
setupRoutes(app)
export { app }
