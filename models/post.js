
module.exports  =  function(seq, Datatypes) {
    let post = seq.define('Post', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title : {
            type : Datatypes.STRING
        },
        body : {
            type : Datatypes.STRING
        },
        tags : {
            type : Datatypes.STRING,
            get: function() {
                return JSON.parse(this.getDataValue('tags'));
            },
            set: function(val) {
                return this.setDataValue('tags', JSON.stringify(val));
            }
        },
        user : {
            type : Datatypes.INTEGER
        }



    }, {tableName : 'post'});
    return post;
};

