import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
   Routes,
  Route} from "react-router-dom";
import Home from "./Screen/Home/Home";
// import Home2 from "./Screen/Home2/Home2";


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