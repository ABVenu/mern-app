var jwt = require('jsonwebtoken');


const authenticationMidlleware = (req,res,next)=>{
  
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'shhhhh', function(err, decoded) {
          if(decoded){
            // console.log(decoded);
            req.body.userId = decoded.userId
            next()
          }
          else{
            res.send("login failed, check crredentials")
          }
      });
}


module.exports = authenticationMidlleware