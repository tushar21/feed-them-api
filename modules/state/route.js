const Route = require('express').Router();
const State = require('./controller');
Route.post('/add', State.add);
Route.get('/list', State.list);
module.exports = Route;