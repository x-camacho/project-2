const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Keyboarder = require('../models/keyboarder')
//
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        function (accessToken, refreshToken, profile, cb) {
            Keyboarder.findOne({googleId: profile.id }, function(err, keyboarder) {
                if (err) return cb(err);
                if (keyboarder) {
                    return cb(null, keyboarder);
                } else {
                    const newKeyboarder = new Keyboarder({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        googleId: profile.id,
                    });
                    newKeyboarder.save(function (err) {
                        if (err) return cb(err);
                        return cb(null, newKeyboarder)
                    });
                }
            });
        }
    )
);

//set up session for now logged in user 
passport.serializeUser(function (keyboarder, done) {
    done(null, keyboarder.id);
});


//this is called every time a req comes in from an existing
//logged in user - we return this assigned user to req.user object
passport.deserializeUser(function (id, done) {
    Keyboarder.findById(id, function (err, keyboarder) {
      done(err, keyboarder);
    });
});