import { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import Home from "./landingPage";
import Vc from "./Abouts"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/about' element={<Vc/>}/>
          <Route path='*' element={<div><h1>Not found</h1></div>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
