import { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import Home from "./landingPage";
import Vc from "./Abouts";
import {
  History,
  UniversityAct,
  Administration,
  AffliatedColleges,
} from "./AboutUs";

import { Contact } from "./contact";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="aboutUs/governingBody" element={<Vc />} />
          <Route exact path="aboutUs/history" element={<History />} />
          <Route
            exact
            path="aboutUs/UniversityAct"
            element={<UniversityAct />}
          />
          <Route
            exact
            path="aboutUs/Administration"
            element={<Administration />}
          />
          <Route
            exact
            path="aboutUs/affliatedColleges"
            element={<AffliatedColleges />}
          />
          <Route exact path="contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Not found</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
