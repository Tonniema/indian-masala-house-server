const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefInfo = require('./data/chefInfo.json');

app.get('/', (req, res) =>{
    res.send('Indian Masala is running')
});

app.get('/chefInfo', (req, res) =>{
    res.send(chefInfo);
    
})

app.listen(port, () => {
    console.log(`Indian Masala API is running on port: ${port}`)

})