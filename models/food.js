const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodSchema = new Schema({
    name : String,
    status : String,
    state : ObjectId
});

const Food = Mongoose.model("Food", FoodSchema);

module.exports = {
    add : add,
    list : list
};


function add(qry){
    return new Promise(function(resolve, reject){
        var newFood = new Food(qry);
        newFood.save(function(err, response){
            if(err) reject(err);
            resolve(response);
        })
    })    
}

function list(qry){
    return new Promise(function(resolve, reject){
        Food.find(qry, function(err, listResponse){
            if(err) reject(err);
            resolve(listResponse);
        })
    })    
}


