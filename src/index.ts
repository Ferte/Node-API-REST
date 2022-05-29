import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())//Middleware que transforma la req.body a un json

const PORT = 3000

app.use('/api/diaries', diaryRouter)

app.listen(PORT, ()=>{
    console.log('Server running on port' + PORT)
})

