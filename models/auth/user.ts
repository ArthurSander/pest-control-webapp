import { Profile } from "passport-discord";

export default interface User {
    accessToken?: string;
    refreshToken?: string;
    profile?: Profile;
}