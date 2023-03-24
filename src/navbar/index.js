import { Component } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

import logob from "../assects/logob.jpg";

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

export default class Navbar extends Component {
  state = { hoveredId: "", showNavItems: false };

  hover = (event) => {
    this.setState({ hoveredId: event.target.id });
  };

  unhover = () => {
    this.setState({ hoveredId: "" });
  };
  render() {
    const { hoveredId } = this.state;
    return (
      <nav className="d-flex flex-row bg-dark text-white justify-content-between col-12">
        <img style={{ width: "5vw", height: "5vw" }} src={logob} alt="logo" />
        <ul className="col-10 d-flex justify-content-end ml-auto flex-row align-items-center">
          {navItems.map((each) => (
            <li
              className={
                hoveredId === each.mh
                  ? "navitem m-2 badge text-primary bg-white"
                  : "m-2 badge"
              }>
              <p id={each.mh} onMouseOver={this.hover}>
                {each.mh}
              </p>
              <ul
                className={
                  hoveredId === each.mh
                    ? "d-block hoveredDropDown text-left"
                    : "d-none"
                }
                style={{ zIndex: 1 }}
                onMouseLeave={this.unhover}>
                {each.dropItems.map((subeach) => (
                  <li className="listItem p-1 " id={subeach}>
                    - {subeach}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
