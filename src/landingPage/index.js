import { Component } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./index.css";

// import kesariimagebg from "../assects/kesariimagebg.png";
import vc from "../assects/vc.png";
import ka from "../assects/ka.png";

import a from "../assects/carosalImages/a.jpg";
import b from "../assects/carosalImages/b.jpg";
import c from "../assects/carosalImages/c.jpg";
import d from "../assects/carosalImages/d.jpg";

class Home extends Component {
  state = { showAbout: false };
  render() {
    const { showAbout } = this.state;
    return (
      <>
        {showAbout && <Navigate to="aboutUs/governingBody" />}
        <div className="landingMainContainer">
          <Navbar />
          <div className="h-100 col-12 d-flex flex-column justify-content-center align-items-center">
            <div>
              <Carousel
                showThumbs={false}
                autoPlay
                interval={3000}
                infiniteLoop>
                <div>
                  <img className="col-6" src={a} alt="carosal" />
                </div>
                <div>
                  <img className="col-6" src={b} alt="carosal" />
                </div>
                <div>
                  <img className="col-6" src={c} alt="carosal" />
                </div>
                <div>
                  <img className="col-6" src={d} alt="carosal" />
                </div>
              </Carousel>
            </div>
            <h1>Welcome to Andhra Kesari University</h1>
            <h3>(Site is Under Development)</h3>
            <img
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                opacity: 1,
                height: "80vh",
              }}
              // src={kesariimagebg}
              src={ka}
              alt="bgmain"
              draggable="false"
            />
          </div>
          <div className="text-light">
            <div className="col-12 d-flex flex-row bg-secondary p-1 justify-content-around align-items-center">
              <div className="col-4 h-100 align-items-center justify-content-center d-flex flex-column">
                <img
                  draggable="false"
                  style={{ height: "30vh" }}
                  src={vc}
                  alt="vc"
                />
                <h5>Dr. ANJI REDDY MAREDDY</h5>
                <p>VICE CHANCELLOR</p>
              </div>
              <div className="col-8">
                <p>
                  Dr. Anji Reddy Mareddy, M.Sc. Geology, Andhra University M.
                  Tech, Civil Engineering from Indian Institute of Technology,
                  Kanpur, India joined Jawaharlal Nehru Technological University
                  (JNTU), Hyderabad in 1989. He was awarded the doctoral degree
                  by JNTU, in 1995 in Environmental Geomatics. Having more than
                  34 years of teaching and research experience in Remote Sensing
                  and GIS, Environmental Impact Assessment (EIA) Geoinformatics
                  for Environmental Management, is presently serving as Vice
                  Chancellor Andhra Kesari University.Ongole . He worked as the
                  principal guide for more than 200 projects at P.G. level, 42
                  Ph.D. projects and at presently guiding more than 08 Ph.D.
                  students He has executed number of research projects sponsored
                  by state and central Government and completed more than 30
                  consultancy projects
                </p>
                <button
                  onClick={() => this.setState({ showAbout: true })}
                  className="btn btn-light">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
