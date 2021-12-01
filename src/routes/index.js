import Home from "../components/Home";
import Register from "../components/RegistrationForm";
import UserProfile from "../components/UserProfile";
import Login from "../pages/Login";
import {DEFAULT, HOME, LOGIN, PROFILE, REGISTER} from "./routes";
import Registration from "../pages/Registration";

export const privateRoutes = [
    {path: [DEFAULT, HOME], component: Home, exact: true},
    {path: PROFILE, component: UserProfile, exact: true},
]

export const publicRoutes = [
    {path: LOGIN, component: Login, exact: true},
    {path: REGISTER, component: Registration, exact: true},
]