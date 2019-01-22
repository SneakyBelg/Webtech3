const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var db

MongoClient.connect('mongodb://webtechExamen:administrator1@ds163694.mlab.com:63694/inhaalexamens', (err, client) => {
  if (err) return console.log(err)
  db = client.db('inhaalexamens')
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

  app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('create.ejs', {result: null});
})

app.post('/search', (req, res) => {
    
    naam = req.body.naam;
    examen = req.body.examen;
    reden = req.body.reden;
    datumAanvraag = Date.now;
	
	db.collection('inhaalAanvragen').insertOne(naam, examen, reden, datumAanvraag, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
    })
})