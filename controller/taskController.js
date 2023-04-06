import Task from '../models/toDo.js';

export const addTask = async (req, res) => {
	const newTask = await Task.create(req.body);
	if (newTask) {
		res.status(200).json({ message: 'Successfully Created' });
	} else {
		res.status(400).json({ message: 'Not created ' });
	}
};

export const fetchTask = async (req, res) => {
	const allTask = await Task.find();

	res.status(200).json(allTask);
};

export const deleteTask = async (req, res) => {
	await Task.deleteOne({ id: req.params.id });
	res.status(200).json('Successfully deleted');
};

export const toggle = async (req, res) => {
	const task = await Task.findOne({ id: req.params.id });
	task.reminder = !task.reminder;
	task.save();
	res.status(200).json('Toggled successfully');
};
