const City =  require('../../models/city');

module.exports.add = function(req, res){
    
    City.add(req.body)
    .then(function(SaveResponse){
        res.send(SaveResponse);
    })
    .catch(function(err){ 
        console.error("Error in creating new city", err);
        res.status(500).send(err);
    })
}


module.exports.list = function(req, res){
    City.list()
    .then(function(statesList){
        res.send(statesList);
    })
    .catch(function(err){
        console.error("Error in fetching states list", err);
        res.status(500).send(err);
    })
}

