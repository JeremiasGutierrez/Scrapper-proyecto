const express =require("express")
const cheerio =require('cheerio')
const exphbs = require('express-handlebars');
const axios =require('axios');
const { response } = require("express");
const mongoose= require("mongoose");
require('dotenv').config({path:'./.env'});

const app = express()
mongoose.connect(process.env.URI,function(error){
  if(error){
  console.log(error)
  return;}
  console.log("Se conecto a la base de datos")
  setInterval(() => {
    run()
  }, process.env.tiempo);


})

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views')

app.get("/",async(req, res)=>{
    res.render('cosa')
})

const puerto=3000
app.listen(puerto)
console.log('http://localhost:3000  ',{puerto})



async function run() {
    const url = "https://www.futbolargentino.com/primera-division/tabla-de-posiciones";
    await axios(url).then((response) => {
      const html_data = response.data;
      const $ = cheerio.load(html_data);
      $ ("#p_score_contenido_TorneoTabs_collapse3 > div > table > tbody").find('tr').each(async function(i){
        
      var clasificacionE= $(this).find("td:nth-child(1)").text();
      var nombreEquipo= $(this).find("span.d-md-none").text();
      var pjE= $(this).find("td:nth-child(3)").text();
      var golesE= $(this).find("td:nth-child(4)").text();
      var eE= $(this).find("td:nth-child(5)").text();
      var pE= $(this).find("td:nth-child(6)").text();
      var puntosE= $(this).find("td:nth-child(10)").text();

      
        console.log(clasificacionE,nombreEquipo,pjE,golesE,eE,pE,puntosE);
      })
    });
  }
run();

