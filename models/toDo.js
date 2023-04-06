import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
	{
		id: Number,
		text: String,
		day: String,
		reminder: Boolean,
	},
	{
		timestamps: true,
	}
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
