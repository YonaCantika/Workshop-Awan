const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Nama: Yona Cantika Damai Sari \n NRP: 3124522001');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})