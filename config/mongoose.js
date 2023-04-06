import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/Task_development', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on(
	'error',
	console.error.bind(console, 'Error while connecting to the mongodb')
);

db.once('open', () => {
	console.log('Succesfully connected to the database:: MongoDB');
});

export default db;
