import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";

const AppRouter = () => {

    const {isLoggedIn} = useSelector(state => state.auth)

    return (
        isLoggedIn
            ?
            <Switch>
                {privateRoutes.map(r =>
                    <Route
                        key={r.path}
                        component={r.component}
                        path={r.path}
                        exact={r.exact}
                    />
                )}
                <Redirect to={"/"}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(r =>
                    <Route
                        key={r.path}
                        component={r.component}
                        path={r.path}
                        exact={r.exact}
                    />
                )}
                <Redirect to={"/login"}/>
            </Switch>
    );
};

export default AppRouter;