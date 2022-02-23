import Cookies from "cookies";
import { IncomingMessage, ServerResponse } from "http";
import { use } from "passport";
import User from "../models/auth/user";

export function getServerSideUser(req: IncomingMessage, res: ServerResponse): User {
    const cookies = new Cookies(req, res);
    let user: User = {}
    try {
        user.accessToken = cookies.get("accessToken");
        user.profile = JSON.parse(cookies.get("profile"));
        user.refreshToken = cookies.get("refreshToken");
    } catch(ex) {
        
    }

    

    return user;
}