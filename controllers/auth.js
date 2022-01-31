const User = require('../models/user');


const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxa2b481bbbd3b4d18968ba13ede39af04.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});

//send a mail after signup

exports.signup = (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    User.findOne({email}).exec((err, user) => {
        if(user){
            return res.status(400).json({error: "User with This Email is ALready Exists."});

        }
        const data = {
            from: 'noreply@gmail.com',
            to: email,
            subject: 'Welcome User',
            text: `Welcome ${name} !.  We Hope, You ENjoy With Us`
        };
        mg.messages().send(data, function (error, body) {
            console.log(body);
        });




        let newUser = new User({name, email, password});
        newUser.save((err, success) => {
            if(err){
                console.log("Error in signup: ", err);
                return res.status(400), json({error:err})
            }
            res.json({
                message: "signup Success!"
            })
        })
    })
}