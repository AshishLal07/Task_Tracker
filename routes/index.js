import express from 'express';
import {
	addTask,
	fetchTask,
	deleteTask,
	toggle,
} from '../controller/taskController.js';

const Router = express.Router();

Router.post('/addtask', addTask);
Router.get('/fetch', fetchTask);
Router.get('/delete/:id', deleteTask);
Router.get('/toggleReminder/:id', toggle);

export default Router;
