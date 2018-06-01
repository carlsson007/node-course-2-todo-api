//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
	return console.log('Cannot connect to mongodb server');
    }
    console.log('Connected to MongoDB server');

    /*
    db.collection('Todos').insertOne({
	text: 'Something to do',
	completed: false
    }, (err, res) => {
	if(err) {
	    return console.log('Cannot insert todo', err);
	}

	console.log(JSON.stringify(res.ops, undefined, 2));
    });
    */


    /*
    // insert new doc into collection Users (name, age, location)
    db.collection('Users').insertOne({
	//_id: 123,
	name: 'Mimmi',
	age: 36,
	location: 'London'
    }, (err, res) => {
	if(err) {
	    return console.log('Cannot insert user', err);
	}

	console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    });
    */

    
    db.close();
});
