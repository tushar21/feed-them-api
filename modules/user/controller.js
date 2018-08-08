const User =  require('../../models/user');

module.exports.addPicker = function(req, res){
    console.log(req.body, "request payload");
    User.add(req.body)
    .then(function(userSaveResponse){
        console.log(userSaveResponse, "userSaveResponse");
        res.send(userSaveResponse);
    })
    .catch(function(err){
        console.error("Error in creating new picker", err);
        res.status(500).send(err);
    })
}


module.exports.listPickers = function(req, res){
    var userTypeMapping = {
        'picker':1
    }

    User.list({type: userTypeMapping[req.params.type]})
    .then(function(pickersList){
        console.log(pickersList, "userSaveResponse");
        res.send(pickersList);
    })
    .catch(function(err){
        console.error("Error in fetching pickers list", err);
        res.status(500).send(err);
    })
}

module.exports.userDetails = function(req, res){

    User.list({_id : req.params.id})
    .then(function(userData ){
        console.log(userData, "userData");
        res.send(userData);
    })
    .catch(function(err){
        console.error("Error in fetching pickers list", err);
        res.status(500).send(err);
    });
    
}