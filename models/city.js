const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const ObjectId = Schema.ObjectId;
const CitySchema = new Schema({
    name : String,
    status : String,
    state : ObjectId
});

const City = Mongoose.model("City", CitySchema);

module.exports = {
    add : add,
    list : list
};


function add(qry){
    return new Promise(function(resolve, reject){
        var newCity = new City(qry);
        newCity.save(function(err, response){
            if(err) reject(err);
            resolve(response);
        })
    })    
}

function list(qry){
    return new Promise(function(resolve, reject){
        City.find(qry, function(err, listResponse){
            if(err) reject(err);
            resolve(listResponse);
        })
    })    
}


