import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
   Routes,
  Route} from "react-router-dom";
import Home from "./screen/Home/Home";



export default function App() {
  return (
    <Router>
      <Fragment>
      </Fragment>
      <Fragment>
  
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        </Fragment>
    </Router>
  );
}