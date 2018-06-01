//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
	return console.log('Cannot connect to mongodb server');
    }
    console.log('Connected to MongoDB server');


/*
    db.collection('Todos').find({
	// completed:false
	_id : new ObjectID('5ae715559d535820844d6ea1')
    }).toArray().then((docs) => {
	console.log('Todos');
	console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
	console.log('Unable to fect todos', err);
    });
*/
/*
    db.collection('Todos').find().count().then((count) => {
	console.log(`Todos count: ${count}`);
    }, (err) => {
	console.log('Unable to fetch todos', err);
    });
*/

    db.collection('Users').find({
	name: 'Mimmi'
    }).toArray().then((docs) => {
	console.log('Users:');
	console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
	console.log('KAn inte hamta users', err);
    });
    
	
    // db.close();
});
