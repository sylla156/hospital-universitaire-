const connection = require('./connection')

function DeleteRendezVous(callback, id) {
    connection.query(` DELETE FROM rendezvous WHERE id= ?`,[id], (error,results,fields) => {
        if(error) throw error;

        connection.query('SELECT * FROM rendezvous;', (error,results,fields) => {
            if(error) throw error;
    
            callback(results);
        })
    })
    
}

module.exports = DeleteRendezVous;