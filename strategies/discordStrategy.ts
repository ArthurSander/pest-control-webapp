import { Console } from "console";
import { access } from "fs";
import Passport from "passport";
import Strategy from "passport-discord";



Passport.use(new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.AUTH_REDIRECT_URL,
    scope: ['identify', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile.username);
}))