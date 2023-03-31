const Task = require('./../models/taskModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');

exports.getAllTask = catchAsync(async (req, res, next) => {
	const tasks = await Task.find();

	res.status(200).json({
		status: 'success',
		result: tasks.length,
		data: {
			tasks,
		},
	});
});
exports.getTask = catchAsync(async (req, res, next) => {
	const task = await Task.findById(req.params.id);
	if (!task) {
		return next(new AppError('No task found with that ID', 404));
	}
	res.status(200).json({
		status: 'success',
		data: {
			task,
		},
	});
});
exports.createTask = catchAsync(async (req, res, next) => {
	const newTask = await Task.create(req.body);

	res.status(201).json({
		status: 'success',
		data: {
			task: newTask,
		},
	});
});
exports.updateTask = catchAsync(async (req, res, next) => {
	const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!task) {
		return next(new AppError('No task found with that ID', 404));
	}
	res.status(200).json({
		status: 'success',
		data: {
			task,
		},
	});
});
exports.deleteTask = catchAsync(async (req, res, next) => {
	const task = await Task.deleteOne({ _id: req.params.id });
	console.log(task);
	console.log(task._id);
	if (!task.deletedCount) {
		return next(new AppError('No task found with that ID', 404));
	}
	res.status(200).json({
		status: 'success',
		message: 'The data has been deleted successfully',
	});
});
