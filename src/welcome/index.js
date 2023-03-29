import { Component } from "react";
import { Navigate } from "react-router-dom";

import "./index.css";

export default class Welcome extends Component {
  state = { tohome: false };
  componentDidMount() {
    setInterval(() => {
      this.setState({ tohome: true });
    }, 3000);
  }

  render() {
    const { tohome } = this.state;
    return (
      <>
        {tohome && <Navigate to="/home" />}
        <div
          className="d-flex flex-column col-12 justify-content-center align-items-center"
          style={{ height: "100vh" }}>
          <h1 className="welcomeNote">Welcome to Andhra Kesari University</h1>
        </div>
      </>
    );
  }
}
