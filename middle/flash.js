const flash = function (request, response, next) {
    

    request.message = function (type, message) {
 
     response.render('pages/index', {type: type, message: message})
     
    }
 
   next();
 };
 
 module.exports = flash;
 