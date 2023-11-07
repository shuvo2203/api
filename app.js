const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send('hello world');
})
app.get('/about', (req, res)=>{
    res.send('hello world from about');
})
app.get('/contact', (req, res)=>{
    res.send('hello world from contact');
})


app.listen(5000, ()=>{
    console.log('server is running');
});