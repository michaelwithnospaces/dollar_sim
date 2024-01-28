require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
const financeRouter = require('./routes/finance')
app.use('/finance', financeRouter)
app.use(cors({
    origin: ['http://localhost:3000']
})) 

mongoose.connect(process.env.DATABASE_URL_FINANCE)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.listen(8000, () => console.log('Server has Started'))