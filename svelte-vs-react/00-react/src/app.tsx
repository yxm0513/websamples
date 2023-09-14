import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelloWorld } from "./00-hello-world";
import { DomUpdate } from "./01-dom-upate";
import { HandlingCSS } from "./02-handling-css";
import { ReactiveCode } from "./03-reactive-code";
import { LifeCycle } from "./04-life-cycle";
import { AsyncCallback } from "./05-async-closure";
import { ConditionalRendering } from "./06-conditional-rendering";
import { CommonData } from "./07-common-data";
import { DataLoad } from "./08-data-load";
import { WebComponents } from "./09-web-components";
import { NavBar } from "./navbar";

export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HelloWorld name="World" />} />
          <Route path="/01-dom-update" element={<DomUpdate />} />
          <Route path="/02-handling-css" element={<HandlingCSS />} />
          <Route path="/03-reactive-code" element={<ReactiveCode />} />
          <Route path="/04-life-cycle" element={<LifeCycle />} />
          <Route path="/05-async-callback" element={<AsyncCallback />} />
          <Route
            path="/06-conditional-rendering"
            element={<ConditionalRendering />}
          />
          <Route path="/07-common-data" element={<CommonData />} />
          <Route path="/08-data-load" element={<DataLoad />} />
          <Route path="/09-web-components" element={<WebComponents />} />
        </Routes>
      </Router>
    </>
  );
};
