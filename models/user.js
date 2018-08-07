const schema = require('mongoose').Schema;

const userSchema = new schema({
    first_name : String,
    last_name : String,
    email : String,
    contact: Number,
    type : Boolean
});

const User = mongoose.model("User", userSchema);

module.exports = {
    get : get,
    add : add,
    list : list 
};

function get(qry){
    return new Promise(function(resolve, reject){
        User.findOne(qry, function(err, data){
            if(err) reject(err);
            resolve(data);
        })
    })    
}

function add(qry){
    return new Promise(function(resolve, reject){
        var newUser = new User(qry);
        newUser.save(function(err, response){
            if(err) reject(err);
            resolve(response);
        })
    })    
}

function list(qry){
    return new Promise(function(resolve, reject){
        User.find(qry, function(err, listResponse){
            if(err) reject(err);
            resolve(listResponse);
        })
    })    
}


