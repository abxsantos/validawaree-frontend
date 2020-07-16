import React, { Fragment } from "react"; // eslint-disable-line
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LinearityPage from "./screens/Linearity/LinearityPage"
import HomePage from "./screens/HomePage/HomePage"
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <ScrollToTop>
                        <Route path="/" exact component={() => <HomePage />} />
                        <Route path="/linearity" exact component={() => <LinearityPage />} />
                    </ScrollToTop>
                </Switch>
            </BrowserRouter>
        </>
    );
}
