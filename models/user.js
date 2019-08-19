
module.exports  =  function(seq, Datatypes) {
    let user = seq.define('User', {
        username : {
            type : Datatypes.STRING
        },
        hashedPassword : {
            type : Datatypes.STRING
        }
    }, {tableName : 'users'});
    return user;
};



