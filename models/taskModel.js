const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	route: {
		type: String,
	},
	shift: {
		type: String,
	},
	place: {
		type: String,
	},
	trolley: {
		type: String,
	},
	note: {
		type: String,
	},
	kind: {
		type: String,
		required: [true, 'An user must have a kind'],
		enum: {
			values: [ 'janitor', 'collector'],
			message: 'Kind is either: janitor, collector',
		},
		default: 'janitor',
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
