const connection = require('./database');
const md5 = require('md5');


function doLogin(email, senha, callback){
    connection.query('select * from usuario u where u.email = ? and u.senha = ?', 
                    [email, senha],
                    function(err, results, fields){
                        if (err) console.error(err);
                        results[0] ? callback(true, results[0].ID) : callback(false, 0);
                    });
}

module.exports = {doLogin};