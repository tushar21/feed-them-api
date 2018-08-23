const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const StateSchema = new Schema({
    name : String,
    status : String    
});

const State = Mongoose.model("State", StateSchema);

module.exports = {
    add : add,
    list : list
};

function add(qry){
    return new Promise(function(resolve, reject){
        var newState = new State(qry);
        newState.save(function(err, response){
            if(err) reject(err);
            resolve(response);
        })
    })    
}

function list(qry){
    return new Promise(function(resolve, reject){
        State.find(qry, function(err, listResponse){
            if(err) reject(err);
            resolve(listResponse);
        })
    })    
}


