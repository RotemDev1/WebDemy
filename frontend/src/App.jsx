import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes.js";
import { Navigation } from './components/Navigation/Navigation';
import { dataService } from './service/generalService/dataService';
import React, { useEffect } from "react";
import "../src/assets/font/font.css";
import "../src/assets/style/reset.css"

import axios from 'axios';

export function App() {
    useEffect(() => {
        console.log('App mount');
        dataService.initData();
        return () => {
            console.log('Unmount app');
            dataService.removeData()
        }
    }, [])

    return (
        <div className="app_container">
            <Router>
                <Navigation />
                <main className="container">
                    <Switch>
                        {routes.map(route => <Route key={route.path} component={route.component} path={route.path} exact />)}
                    </Switch>
                </main>
            </Router>
        </div>
    );
}
