import React, { Component } from "react";
import Slider from "react-slick";

import { FcAlarmClock } from "react-icons/fc";
import { MdCall, MdEmail } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from "../assects/carosalImages/a.jpg";
import b from "../assects/carosalImages/b.jpg";
import c from "../assects/carosalImages/c.jpg";
import d from "../assects/carosalImages/d.jpg";
import e from "../assects/carosalImages/e.jpg";
import f from "../assects/carosalImages/f.jpg";
import g from "../assects/carosalImages/g.jpg";
import h from "../assects/carosalImages/h.jpg";
import i from "../assects/carosalImages/i.jpg";
import j from "../assects/carosalImages/j.jpg";
import k from "../assects/carosalImages/k.jpg";
import l from "../assects/carosalImages/l.jpg";
import m from "../assects/carosalImages/m.jpg";
import n from "../assects/carosalImages/n.jpg";
import o from "../assects/carosalImages/o.jpg";

const carosalimages = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];

export default class Carosal extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
    };
    return (
      <>
        <div className="col-12" style={{ position: "relative" }}>
          <Slider className="col-12" {...settings}>
            {carosalimages.map((each) => (
              <div className="shadow-sm bg-body rounded">
                <img className="col-12" src={each} alt="carosalImage" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="col-10 bg-white d-flex flex-row justify-content-around"
            style={{
              position: "absolute",
              bottom: "2%",
              height: "30vh",
              boxShadow: "0px 0px 10px 0px silver",
              margin: "auto",
            }}>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3>
                <FcAlarmClock /> OPENING HOURS
              </h3>
              <p>Monday - Saturday 09.30 A.M - 5.00 P.M.</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3>
                <MdCall className="text-primary" /> CALL US ANYTIME
              </h3>
              <p>9999999999</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3>
                <MdEmail className="text-primary" /> EMAIL US
              </h3>
              <p>regakuongole@gmail.com</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
