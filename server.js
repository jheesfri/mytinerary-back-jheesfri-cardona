import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './router/index.js'
import error_404_not_found from './middlewares/error_404_not_found.js'
import error_500 from './middlewares/error_500.js'
import requestLogger from './middlewares/requestLogger .js'
import port from './middlewares/port.js'


const server = express()

const PORT=  process.env.PORT || 8080
const ready = ()=>console.log('port in server '+PORT);

server.listen(PORT,ready)


server.use(express.json())//permite trabajar con formato json en entrada y salida
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev'))

server.use('/mytinerary',indexRouter)
server.use(port)
server.use(requestLogger)
server.use(error_404_not_found)
server.use(error_500)

