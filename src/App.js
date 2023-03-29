import { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import Home from "./landingPage";
import Vc from "./Abouts";
import Welcome from "./welcome";
import {
  History,
  UniversityAct,
  Administration,
  AffliatedColleges,
  VisionAndMission,
} from "./AboutUs";

import { Contact } from "./contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/home/aboutUs/governingBody" element={<Vc />} />
          <Route exact path="/home/aboutUs/history" element={<History />} />
          <Route
            exact
            path="/home/aboutUs/UniversityAct"
            element={<UniversityAct />}
          />
          <Route
            exact
            path="home/aboutUs/Administration"
            element={<Administration />}
          />
          <Route
            exact
            path="home/aboutUs/affliatedColleges"
            element={<AffliatedColleges />}
          />
          <Route exact path="/home/contact" element={<Contact />} />
          <Route
            exact
            path="home/aboutUs/Vision&Mission"
            element={<VisionAndMission />}
          />
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
