const connection = require('./database');
const md5 = require('md5');

function generateToken () {
    token = Math.random().toString(36).substr(2);
    token = token + Math.random().toString(36).substr(2);

    return token;
}

function doLogin(email, senha, callback){
    connection.query('select * from usuario u where u.email = ? and u.senha = ?', 
                    [email, senha],
                    function(err, results, fields){
                        if (err) console.error(err);                        
                        
                        if (results[0]) {
                            token = generateToken();

                            connection.query('update usuario u set u.token = ?, lastlogin = ?', 
                                [token, new Date()]);

                            callback(true, token);
                        } else callback(false, 0);
                    });
}

function register (email, senha, trelloAPI, callback) {
    new Promise(connection.query('select * from usuario u where u.email = ? and u.senha = ?', 
                    [email, senha])
            ).then();
}

module.exports = {doLogin};