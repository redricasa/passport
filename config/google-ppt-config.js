const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
// getting access to keys.js 
const Keys = require('Keys');

passport.use(
    new GoogleStrategy({
        // options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: Keys.google.clientID,
        clientSecret: Keys.google.clientSecret
    }, ( ) => {
        // ppt callback function
    })
)