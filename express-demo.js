const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/name',(req, res) => {
    res.send('Thiyasun')
})
app.get('/registernumber',(req,res) => {
    res.send('721423243060')
})
app.get('/color',(req,res) => {
    res.send('Black')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
