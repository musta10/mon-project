const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';






const config = require('./config')

const db = require('../database/database')

router.post('/sign-up', (req, res) => {
   console.log(req.body);
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            var post = {name: req.body.name, email: req.body.email, password: hash}
            db.query('INSERT INTO users SET ?', post, function(err, result) {
                if(err) throw (err);
                res.send()
            })
        });
    });
})

router.post('/sign-in', (req,res) => {
    db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) {
        if(err) throw(err);
        console.log(result);
        bcrypt.compare(req.body.password, result[0].password, function(err, resulta) {
            let token = jwt.sign( {id: result.id }, config.secret);
            console.log(resulta);
            if(resulta){
                res.status(200).send("you are authenticated")
            } else {
                //res.status(404).send("Sorry, we don't know this user")
                res.status(404).json({message: "Sorry, we don't know this user"})
            }

        });
   
       
        
    });

})


module.exports = router;





































