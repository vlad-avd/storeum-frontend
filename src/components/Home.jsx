import React from "react";
import {useSelector} from "react-redux";

const Home = () => {

    const {user} = useSelector(state => state.auth)

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>Hello, {user.username}! It`s home page.</h3>
            </header>
        </div>
    );
};

export default Home;