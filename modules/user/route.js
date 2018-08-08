const Route = require('express').Router();
const UserController = require('./controller');
Route.post('/add', UserController.addPicker);
Route.get('/list/:type', UserController.listPickers);
Route.get('/:id', UserController.userDetails);
module.exports = Route;