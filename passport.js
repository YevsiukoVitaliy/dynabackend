const GoogleStrategy = require("passport-google-oauth20").Strategy;
const MicrosoftStrategy = require("passport-microsoft").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "1075234256896-f9dqc109vsv1rlbipu5olt7pqcugvdmj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const MICROSOFT_CLIENT_ID = "c237ee7e-c502-4108-bc2e-c68f988af33b";
const MICROSOFT_CLIENT_SECRET = "HGs8Q~ZCac8j5UEQGPYXUZ888MhB7h_wJa.uEcXE";
const FACEBOOK_APP_ID = "618732853171315";
const FACEBOOK_APP_SECRET = "521c79bd530e03029a9a05abb3d2090f";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new MicrosoftStrategy(
    {
      clientID: MICROSOFT_CLIENT_ID,
      clientSecret: MICROSOFT_CLIENT_SECRET,
      callbackURL: "/auth/microsoft/callback",
      scope: ['user.read'],
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
