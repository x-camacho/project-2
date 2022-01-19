const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Student = require('../models/student')
//
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        function (accessToken, refreshToken, profile, cb) {
            Student.findOne({googleId: profile.id }, function(err, student) {
                if (err) return cb(err);
                if (student) {
                    return cb(null, student);
                } else {
                    const newStudent = new Student({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        googleId: profile.id,
                    });
                    newStudent.save(function (err) {
                        if (err) return cb(err);
                        return cb(null, newStudent)
                    });
                }
            });
        }
    )
);

//set up session for now logged in user 
passport.serializeUser(function (student, done) {
    done(null, student.id);
});


//this is called every time a req comes in from an existing
//logged in user - we return this assigned user to req.user object
passport.deserializeUser(function (id, done) {
    Student.findById(id, function (err, student) {
      done(err, student);
    });
});