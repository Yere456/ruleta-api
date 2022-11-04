import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import playersRoutes from './routes/players.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// * Routes
app.use('/api/players', playersRoutes)

export default app
