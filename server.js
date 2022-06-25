const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://gundam:RpUmgwH2e10kHbFn@cluster0.dabepjp.mongodb.net/?retryWrites=true&w=majority'
const app = express();

MongoClient.connect(connectionString, (err, client) => {
	if (err) return console.error(err)
	console.log('Connected to database')	
})

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
	console.log('listening on 3000')
})

app.get('/', function(req, res) {
	res.sendFile('/Users/idris/Desktop/project-crud' + '/index.html')
})

app.post('/quotes', (req, res) => {
	console.log(req.body)
})

