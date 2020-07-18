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
          <ScrollToTop className="scrollToTopComponent">
            <Route
              className="homePageRoute"
              path="/"
              exact
              component={HomePage}
            />
            <Route
            className="linearityPageRoute"
              path="/linearity"
              exact
              component={LinearityPage}
            />
            <Footer className='footerComponent'/>
          </ScrollToTop>
        </Switch>
      </BrowserRouter>
    </>
  );
}
