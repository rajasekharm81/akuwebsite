import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from "../assects/carosalImages/a.jpg";
import b from "../assects/carosalImages/b.jpg";
import c from "../assects/carosalImages/c.jpg";
import d from "../assects/carosalImages/d.jpg";
// import e from "../assects/carosalImages/e.jpg";
// import f from "../assects/carosalImages/f.jpg";
// import g from "../assects/carosalImages/g.jpg";
// import h from "../assects/carosalImages/h.jpg";
import i from "../assects/carosalImages/i.jpg";
import j from "../assects/carosalImages/j.jpg";
import k from "../assects/carosalImages/k.jpg";
import l from "../assects/carosalImages/l.jpg";
import m from "../assects/carosalImages/m.jpg";
import n from "../assects/carosalImages/n.jpg";
import o from "../assects/carosalImages/o.jpg";
import p from "../assects/carosalImages/p.jpg";
// import q from "../assects/carosalImages/q.jpg";
import r from "../assects/carosalImages/r.jpg";
import s from "../assects/carosalImages/s.jpg";
import t from "../assects/carosalImages/t.jpg";
import u from "../assects/carosalImages/u.jpg";
import v from "../assects/carosalImages/v.jpg";
import w from "../assects/carosalImages/w.jpg";
import x from "../assects/carosalImages/x.jpg";
import y from "../assects/carosalImages/y.jpg";
import z from "../assects/carosalImages/z.jpg";

const carosalimages = [
  a,
  b,
  c,
  d,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  r,
  t,
  s,
  u,
  v,
  w,
  x,
  y,
  z,
];

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
        <div className="col-12">
          <Slider className="col-12 col-md-8 m-auto" {...settings}>
            {carosalimages.map((each) => (
              <div className="shadow-sm p-3 mb-5 bg-body rounded">
                <img className="col-12" src={each} alt="carosalImage" />
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
