import session from "express-session";
import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";
import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { runInThisContext } from "vm";
import { getServerSideUser } from "../common/auth";
import User from "../models/auth/user";
import passport from "passport";
const discordStrategy = require('../strategies/discordStrategy');

const express = require('express');
const app = express();


app.use(session({
  secret: "DefaultSecret",
  cookie: {
    maxAge: 60000 * 60 * 2
  },
  saveUninitialized: false,
  name: "discord.oauth2"
}))

app.use(passport.initialize());
app.use(passport.session());

export default class CustomDocument extends Document {


    static async getInitialProps(ctx: DocumentContext): Promise<CustomInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        let props = new CustomInitialProps(initialProps);
        props.user = await getServerSideUser(ctx.req, ctx.res);
        return props;
    }
    
    render() {

        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

class CustomInitialProps implements DocumentInitialProps {
    constructor(props: DocumentInitialProps) {
        this.head = props.head;
        this.html = props.html;
        this.styles = props.styles;
    }

    html: string;
    head?: JSX.Element[];
    styles?: ReactElement<any, string | JSXElementConstructor<any>>[] | ReactFragment;
    user?: User;
    
}