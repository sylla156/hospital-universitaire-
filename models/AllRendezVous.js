const connection = require('./connection')

function AllRendezVous(callback) {
    connection.query('SELECT * FROM rendezvous;', (error,results,fields) => {
        if(error) throw error;

        callback(results);
    })
    
}

module.exports = AllRendezVous;