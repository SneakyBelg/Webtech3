const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb://baseuser:baseuser1@ds143542.mlab.com:43542/examen', (err, client) => {
  if (err) return console.log(err)
  db = client.db('examen')
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

app.post('/addAanvraag', (req, res) => {
    datumAanvraag = Date.now;
    console.log(req.body);
    if (db.collection('inhaal').find(req.body)){
        console.log('Already exists');
    }
    else{
        db.collection('inhaal').insertOne(req.body, (err, result) => {
            if (err) return console.log(err)
        
            console.log('saved to database')
            res.redirect('/')
        })
    }
})