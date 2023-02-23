const express = require ("express");
const axios = require ("axios");
const app = express();
app.get('/', async (req,res)=>{
    const firstPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/70');
    const secoundPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/150');
    const thaeredPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/333');
    res.render('index',{firstPokemon: firstPokemon.data,secoundPokemon:secoundPokemon.data,thaeredPokemon:thaeredPokemon.data})
}
)



app.set('view engine','ejs');
app.set('views',__dirname +'/views');
app.listen(3000);