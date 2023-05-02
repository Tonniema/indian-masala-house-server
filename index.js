const express = require('express');
const app = express();
const cors = require('cors');
const  Recipe = require('./data/recipe.json');
const chef = require('./data/chefInfo.json');

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Indian Masala is running')
});

app.get('/chef', (req, res) =>{
    res.send(chef);
    
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id
    if (id == 0) {
      res.send(Recipe)
    } else {
      const Chef_Recipe = Recipe.filter(r => r.Recipe_ID === id)
      res.send(Chef_Recipe)
    }
  })
  
  
  app.get('/Recipe', (req, res) => {
    res.send(Recipe)
  })

app.listen(port, () => {
    console.log(`Indian Masala API is running on port: ${port}`)

})