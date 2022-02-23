import Cookies from "cookies";
import { ServerResponse } from "http";
import { redirect } from "next/dist/server/api-utils";
import { Router } from "next/router";
import passport from "passport";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useEffect } from "react";


export default function handler(req, res, next) {
    passport.authenticate('discord', {
        failureRedirect: '/forbidden',
        successRedirect: '/'
    })(req, res, next);
    
    res.writeHead(301, {
        Location: '/'
    });
    res.end();
}