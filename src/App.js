import React from "react";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/navbar/Navbar";
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