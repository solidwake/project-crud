const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://gundam:RpUmgwH2e10kHbFn@cluster0.dabepjp.mongodb.net/?retryWrites=true&w=majority'
const app = express();

MongoClient.connect(connectionString, (err, client) => {
	if (err) return console.error(err)
	console.log('Connected to database')
	const db = client.db('gundam-quotes')
	const quotesCollection = db.collection('quotes')

	app.set('view engine', 'ejs');

	app.use(bodyParser.urlencoded({ extended: true }))
	
	app.listen(3000, function() {
        	console.log('listening on 3000')
	})

	app.get('/', (req, res) => {
		db.collection('quotes').find().toArray()
			.then(results => {
				res.render('index.ejs', { quotes: results })
				console.log(results)
			})
			.catch(error => console.error(error))
	})

	app.post('/quotes', (req, res) => {
        	quotesCollection.insertOne(req.body)
			.then(result => {
				console.log(result)
				res.redirect('/')
			})
			.catch(error => console.error(error))
	})
})
