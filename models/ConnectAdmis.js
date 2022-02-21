const connection = require('./connection');

class ConnectAdmis {


    static  check(email,password,callback,callback2){
       connection.query('SELECT * FROM admis LIMIT 100;',function (error,results,field){
           if (error ) throw new error;

            if(email === results[0].email && password === results[0].pass){
                callback(results)
            }else {
                callback2(results)
            }
       })
    }

   
}

module.exports = ConnectAdmis;