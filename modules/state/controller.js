const State =  require('../../models/state');

module.exports.add = function(req, res){
    
    State.add(req.body)
    .then(function(userSaveResponse){
        res.send(userSaveResponse);
    })
    .catch(function(err){ 
        console.error("Error in creating new picker", err);
        res.status(500).send(err);
    })
}


module.exports.list = function(req, res){
    State.list()
    .then(function(statesList){
        res.send(statesList);
    })
    .catch(function(err){
        console.error("Error in fetching states list", err);
        res.status(500).send(err);
    })
}

