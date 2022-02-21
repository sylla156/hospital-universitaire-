const connection = require('./connection')



class CreateRendezVous {

    static create (firstName, lastName, phone, email,message) {
     connection.query('INSERT INTO rendezvous SET create_time=?, firstName=?, lastName=?, phone=?, email=?, message=?', [new Date(),firstName, lastName, phone, email, message], (error,resultat) => {
         if (error)  throw error

     } )

     return true;
    }

   
}

module.exports = CreateRendezVous;