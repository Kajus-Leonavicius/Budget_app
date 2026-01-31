import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import authRouter from './routes/authRoutes.js'
import transactionsRouter from './routes/transactionsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(cookieParser())

app.use('/auth', authRouter)
app.use('/transactions', transactionsRouter)
app.use('/me', userRoutes)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server running on port ${process.env.SERVER_PORT}`)
})