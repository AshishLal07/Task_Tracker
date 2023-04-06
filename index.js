import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './config/mongoose.js';
import Router from './routes/index.js';
dotenv.config();

const app = express();
const port = 8002;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.use('/', Router);

app.listen(port, function (err) {
	if (err) {
		console.log(`Error in running a server: ${err}`);
		return;
	}
	console.log(`Server is running on port: ${process.env.PORT}`);
});
