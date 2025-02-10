const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const userModel = require('../models/userModel');
require('dotenv').config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists
        const existingUser = await userModel.findUserByEmail(profile.emails[0].value);

        if (existingUser) {
          return done(null, existingUser);
        }

        // If user doesn't exist, create a new user
        const newUser = {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          password: null, // No password since using OAuth
          phone: null,
          address: null,
          dob: null,
          gender: null,
          securityQuestion: null,
          securityAnswer: null,
        };

        const [result] = await userModel.createUser(newUser);
        const createdUser = { ...newUser, id: result.insertId };

        return done(null, createdUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);


passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // Here you can handle saving the user info in your database
    // For now, we just pass the profile
    return done(null, profile);
  }
))

// Serialize & Deserialize User
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findUserById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
