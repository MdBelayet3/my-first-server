const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) =>{
    res.send("Hello world it's my first ever server");
})

app.get('/data', (req, res) => {
    res.send("More data coming sooooon......");
})
app.get('/mobile', (req, res) => {
    res.send("Here I have some mobile information");
})

app.get('/car', (req, res) => {
    res.send("Here I have some car information");
})

app.listen(port, () => {
    console.log(`My first server is running on port : ${port}`);
})
