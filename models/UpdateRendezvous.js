const connection = require('./connection')

function UpdateRendezvous (firstName, lastName, phone, email,message,id,callback) 
   {
        connection.query( 'UPDATE rendezvous SET create_time=?, firstName=?, lastName=?, phone=?, email=?, message=?  WHERE id = ?; ', [new Date(),firstName, lastName, phone, email, message,id], (error,resultat) => {
            if (error)  throw error
            connection.query('SELECT * FROM rendezvous;', (error,results,fields) => {
                if(error) throw error;
        
                callback(results);
            })
        } )
   
        return true;
       }
    


module.exports = UpdateRendezvous;