import React, { Fragment } from "react"; // eslint-disable-line
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LinearityPage from "./screens/LinearityPage/LinearityPage";
import HomePage from "./screens/HomePage/HomePage";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <ScrollToTop data-test="scrollToTopComponent">
            <Route
              data-test="homePageRoute"
              path="/"
              exact
              component={HomePage}
            />
            <Route
            data-test="linearityPageRoute"
              path="/linearity"
              exact
              component={LinearityPage}
            />
            <Footer data-test='footerComponent'/>
          </ScrollToTop>
        </Switch>
      </BrowserRouter>
    </>
  );
}
