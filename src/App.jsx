import React, { Fragment } from "react"; // eslint-disable-line
import { BrowserRouter, Route, Switch } from "react-router-dom";


import LinearityPage from "./screens/Linearity/LinearityPage";
import HomePage from "./screens/HomePage/HomePage";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import "./App.css"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <ScrollToTop>
            <Route path="/" exact component={() => <HomePage />} />
            <Route
              path="/linearity"
              exact
              component={() => <LinearityPage />}
            />
            <Footer />
          </ScrollToTop>
        </Switch>
      </BrowserRouter>
    </>
  );
}
