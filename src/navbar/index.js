import { Component } from "react";
import { Navigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

// import logob from "../assects/logob.jpg";
import logoa from "../assects/logoa.jpg";

const navItems = [
  {
    mh: "About Us",
    dropItems: [
      "History",
      "Vision and Mission",
      "Governing Body",
      "University Act and Statutes",
      "Administration",
      "Campus Facilities",
      "Affiliated Colleges",
    ],
  },
  {
    mh: "Academics",
    dropItems: [
      "Schools and Departments",
      "Courses Offered",
      "Admission Requirements and Procedures",
      "Academic Calendar",
      "Examination Schedule and Results",
      "Syllabus",
      "Student Handbook",
      "Academic Integrity Policy",
    ],
  },
  {
    mh: "Research and Development",
    dropItems: [
      "Centers and Institutes",
      "Research Areas",
      "Publications and Journals",
      "Conferences and Workshops",
      "Grants and Funding Opportunities",
    ],
  },
  {
    mh: "Student Life",
    dropItems: [
      "Student Activities and Organizations",
      "Sports and Recreation",
      "Health and Wellness",
      "Counseling and Support Services",
    ],
  },
  {
    mh: "Placement and Career Services",
    dropItems: [
      "Internships and Experiential Learning",
      "Career Counseling and Advising",
      "Job Opportunities and Placements",
    ],
  },
  {
    mh: "Tender",
    dropItems: ["Tender Notices", "Tender Results"],
  },
  {
    mh: "Right to Information (RTI)",
    dropItems: [
      "About RTI",
      "RTI Act and Rules",
      "RTI Application and Appeals",
    ],
  },
  {
    mh: "Alumni",
    dropItems: [
      "Alumni Association",
      "News and Events",
      "Giving and Donations",
    ],
  },
  {
    mh: "News and Events",
    dropItems: [
      "News and Updates",
      "Announcements and Notices",
      "Calendar of Events",
    ],
  },
  {
    mh: "Contact Us",
    dropItems: [
      "Campus Map and Directions",
      "Directory of Offices and Personnel",
      "Feedback and Inquiries",
    ],
  },
];

const TopNav = [
  {
    mh: "Home",
    dropItems: [],
  },
  {
    mh: "Administration",
    dropItems: [
      " Vice Chancellor ",
      "Registrar ",
      "Principal (I/c) ",
      "Vice Principal (I/c)",
      "Dean (I/c), CDC",
      "Officer On Special Duty (I/c)",
      "Dean(I/c), Academics Controller of Examinations(I/c)",
      "Coordinator for Women Empowerment and Women's Grievances Redressal Cell (I/c)",
      "Director (I/c), Directorate of Admissions",
      "University Estate and Infrastructure Development Officer(I/c)",
      "Coordinator(I/c), NSS",
    ],
  },
  {
    mh: "Contact",
    dropItems: [],
  },
];

export default class Navbar extends Component {
  state = { hoveredId: "", showNavItems: false, navTo: "", navToc: "" };

  hover = (event) => {
    this.setState({ hoveredId: event.target.id });
  };

  unhover = () => {
    this.setState({ hoveredId: "" });
  };

  Takenav = (event) => {
    this.setState({ navTo: event.target.id });
  };

  navigator = () => {
    const { navTo } = this.state;
    switch (navTo) {
      case "History":
        return <Navigate to="aboutUs/history" />;
      case "Vision and Mission":
        return <Navigate to="aboutUs/Vision&Mission" />;
      case "Governing Body":
        return <Navigate to="aboutUs/governingBody" />;
      case "University Act and Statutes":
        return <Navigate to="aboutUs/UniversityAct" />;
      case "Administration":
        return <Navigate to="aboutUs/Administration" />;
      case "Affiliated Colleges":
        return <Navigate to="/home/aboutUs/affliatedColleges" />;
      case "Home":
        return <Navigate to="/" />;
      case "Contact":
        return <Navigate to="/home/contact" />;
      default:
        return null;
    }
  };

  render() {
    const { hoveredId } = this.state;
    return (
      <>
        {this.navigator()}
        <nav
          className="d-flex flex-row bg-white text-white justify-content-between"
          style={{ boxShadow: "1px 1px 350px 0px blue", width: "99vw" }}>
          <div className="d-flex justify-content-center align-items-center col-xl-5">
            <img src={logoa} alt="logo" style={{ width: "100%" }} />
          </div>
          <div className="d-flex flex-column ">
            <ul className="d-flex justify-content-end p-0 ml-auto flex-row align-items-center">
              {TopNav.map((each) => (
                <button
                  onClick={
                    each.dropItems.length === 0
                      ? () => {
                          this.setState({ navTo: each.mh });
                        }
                      : null
                  }
                  className={
                    hoveredId === each.mh
                      ? "d-flex flex-row justify-content-center align-items-centre border-0 navitem text-white bg-primary rounded"
                      : " navitem text-dark border-0 bg-white"
                  }>
                  <p id={each.mh} onMouseOver={this.hover}>
                    {each.mh}
                  </p>
                  {each.dropItems.length > 0 ? (
                    <ul
                      className={
                        hoveredId === each.mh
                          ? "d-block hoveredDropDown badge text-left mt-5"
                          : "d-none"
                      }
                      style={{ zIndex: 1 }}
                      onMouseLeave={this.unhover}>
                      {each.dropItems.map((subeach) => (
                        <li
                          onClick={this.Takenav}
                          className="listItem p-1"
                          id={subeach}>
                          - {subeach}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </button>
              ))}
            </ul>
            <ul className="d-flex justify-content-end p-0 ml-auto flex-row align-items-end flex-wrap">
              {navItems.map((each) => (
                <li
                  className={
                    hoveredId === each.mh
                      ? "navitem  text-white bg-primary"
                      : " text-dark"
                  }>
                  <p className="badge" id={each.mh} onMouseOver={this.hover}>
                    {each.mh}
                  </p>
                  <ul
                    className={
                      hoveredId === each.mh
                        ? "d-block hoveredDropDown badge text-left"
                        : "d-none badge"
                    }
                    style={{ zIndex: 1 }}
                    onMouseLeave={this.unhover}>
                    {each.dropItems.map((subeach) => (
                      <li
                        onClick={this.Takenav}
                        className="listItem p-1 "
                        id={subeach}>
                        - {subeach}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
