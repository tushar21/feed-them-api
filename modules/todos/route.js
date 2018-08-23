const Route = require('express').Router();
const ToDoController = require('./controller');
Route.post('/add', ToDoController.addTodo);
Route.get('/list', ToDoController.listTodos);
Route.get('/:id', ToDoController.todoDetails);
module.exports = Route;