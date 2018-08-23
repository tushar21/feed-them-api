const ToDo =  require('../../models/todo');

module.exports.addTodo = function(req, res){
    
    ToDo.add(req.body)
    .then(function(todoSaveResponse){
        console.log(todoSaveResponse, "todoSaveResponse");
        res.send(todoSaveResponse);
    })
    .catch(function(err){
        console.error("Error in creating new todo", err);
        res.status(500).send(err);
    })
}


module.exports.listTodos = function(req, res){   
    ToDo.list()
    .then(function(todosList){
        console.log(todosList, "todoSaveResponse");
        res.send(todosList);
    })
    .catch(function(err){
        console.error("Error in fetching todos list", err);
        res.status(500).send(err);
    })
}

module.exports.todoDetails = function(req, res){

    ToDo.list({_id : req.params.id})
    .then(function(todoData ){
        console.log(todoData, "todoData");
        res.send(todoData);
    })
    .catch(function(err){
        console.error("Error in fetching todos list", err);
        res.status(500).send(err);
    });
    
}