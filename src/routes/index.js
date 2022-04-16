import Home from "../pages/Home";
import Login from "../pages/Login";
import {DEFAULT, HOME, LOGIN, MESSAGE, OAUTH, REGISTER} from "./routes";
import Registration from "../pages/Registration";
import GoogleOauth from "../components/GoogleOauth/GoogleOauth";
import Message from "../pages/Message";

export const privateRoutes = [
    {path: [DEFAULT, HOME], component: Home, exact: true},
]

export const publicRoutes = [
    {path: LOGIN, component: Login, exact: true},
    {path: REGISTER, component: Registration, exact: true},
    {path: OAUTH, component: GoogleOauth, exact: true},
    {path: MESSAGE, component: Message, exact: true}
]