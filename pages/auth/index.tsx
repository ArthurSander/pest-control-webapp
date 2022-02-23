import { NextPage } from "next";
import passport from "passport";

const Page: NextPage = () => {
    return (
        <div></div>
    )
}

Page.getInitialProps = async (context) => {
    passport.authenticate('discord', {
        failureRedirect: '/forbidden',
        successRedirect: '/'
    })(context.req, context.res, context.err);
}

export default Page