import Home from "../pages/Home";
import Login from "../pages/Login";
import Error from "../pages/Error";
import {CONTENT, DEFAULT, ERROR, HOME, LOGIN, MESSAGE, OAUTH, REGISTER} from "./routes";
import Registration from "../pages/Registration";
import GoogleOauth from "../components/GoogleOauth/GoogleOauth";
import Message from "../pages/Message";
import NoteContent from "../pages/NoteContent";

export const privateRoutes = [
    {path: [DEFAULT, HOME], component: Home, exact: true},
    {path: CONTENT, component: NoteContent, exact: true},
]

export const publicRoutes = [
    {path: LOGIN, component: Login, exact: true},
    {path: REGISTER, component: Registration, exact: true},
    {path: OAUTH, component: GoogleOauth, exact: true},
    {path: MESSAGE, component: Message, exact: true},
    {path: ERROR, component: Error, exact: true},
]