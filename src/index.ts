import express from 'express'
const app = express()
app.use(express.json())//Middleware que transforma la req.body a un json

const PORT = 3000
app.get('/ping', (req,res) =>{
    console.log('someone pinged here')
    res.send
})


app.listen(PORT, ()=>{
    console.log('Server running on port' + PORT)
})

