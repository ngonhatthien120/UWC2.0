const express = require('express');
const taskController = require('../controllers/taskController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
	.route('/')
	.get(authController.protect, taskController.getAllTask)
	.post(authController.protect, taskController.createTask);

router
	.route('/:id')
	.get(authController.protect, taskController.getTask)
	.patch(authController.protect, taskController.updateTask)
	.delete(authController.protect, taskController.deleteTask);

module.exports = router;
