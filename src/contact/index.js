import { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div
        className="col-12 text-dark d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh" }}>
        <div
          className=" text-start col-12 col-md-6 d-flex justify-content-center align-items-start flex-column"
          style={{ boxShadow: "0px 0px 10px 0px silver" }}>
          <h5 style={{ textDecoration: "underline" }}>
            <strong>Contact Details</strong>
          </h5>
          <p>
            <strong>The Registrar,</strong>
          </p>
          <p>Andhra Kesari University,</p>
          <p>Ongole, Praklasam Dist., PIN-523001</p>
          <p>Email: regakuongole@gmail.com</p>
        </div>
      </div>
    );
  }
}
