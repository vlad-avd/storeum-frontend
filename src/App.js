import React from "react";
import "./styles/App.scss";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import {Layout} from "antd";

const App = () => {
    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;