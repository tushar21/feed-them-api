const Route = require('express').Router();
const City = require('./controller');
Route.post('/add', City.add);
Route.get('/list', City.list);
module.exports = Route;