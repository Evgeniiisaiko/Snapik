import {setCookie} from "./CookieUtil";
import {JWT} from "../types/user.types";

export const setCookieTokens = (tokens: JWT): void => {
    setCookie("tokens", tokens, 30)
}