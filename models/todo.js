const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const todoSchema = new Schema({
    name : String,
    description : String,
    status : String,
    created_by: Number,
    type : Number
});

const ToDo = Mongoose.model("Todo", todoSchema);

module.exports = {
    get : get,
    add : add,
    list : list,
    delete : deleteTodo 
};

function deleteTodo(id){
    
}

function get(qry){
    return new Promise(function(resolve, reject){
        ToDo.findOne(qry, function(err, data){
            if(err) reject(err);
            resolve(data);
        })
    })    
}

function add(qry){
    return new Promise(function(resolve, reject){
        var newTodo = new ToDo(qry);
        newTodo.save(function(err, response){
            if(err) reject(err);
            resolve(response);
        })
    })    
}

function list(qry){
    return new Promise(function(resolve, reject){
        ToDo.find(qry, function(err, listResponse){
            if(err) reject(err);
            resolve(listResponse);
        })
    })    
}


