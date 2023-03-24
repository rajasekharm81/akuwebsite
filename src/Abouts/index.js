import { Component } from "react";
import { Navigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import vc from "../assects/vc.png";
export default class Vc extends Component {
  state = { home: false };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  aboutVc = () => {
    return (
      <div
        className="d-flex flex-column justify-content-start text-center align-items-center text-light"
        style={{ height: "100vh" }}>
        <img
          draggable="false"
          style={{ height: "20vh" }}
          src={vc}
          alt="vc"
          className="mb-2"
        />
        <div>
          <h5 className="text-center">
            Dr. ANJI REDDY MAREDDY, M.Tech. (IITK), Ph.D. (JNTU)
          </h5>
          <p>Member MISTE, MISRS, MIAIA, MIWRS, MISH, MISC, MTSA</p>
          <p>Professor of Environmental Science and Technology</p>
        </div>
        <div className="col-11" style={{ textAlign: "justify" }}>
          <p>Dr. Anji Reddy Mareddy, M.Sc. Geology, Andhra University </p>
          <p>
            M. Tech, Civil Engineering from Indian Institute of Technology,
            Kanpur, India joined Jawaharlal Nehru Technological University
            (JNTU), Hyderabad in 1989. He was awarded the doctoral degree by
            JNTU, in 1995 in Environmental Geomatics. Having more than 34 years
            of teaching and research experience in Remote Sensing and GIS,
            Environmental Impact Assessment (EIA) Geoinformatics for
            Environmental Management, is presently serving as Vice Chancellor
            Andhra Kesari University.Ongole . He worked as the principal guide
            for more than 200 projects at P.G. level, 42 Ph.D. projects and at
            presently guiding more than 08 Ph.D. students He has executed number
            of research projects sponsored by state and central Government and
            completed more than 30 consultancy projects
          </p>
          <p>
            He published and presented 176 research papers. He delivered expert
            lectures in USA, Sweden, Japan, Thailand, UK, Sri Lanka, Nepal,
            Nigeria, China, Singapore, Dubai, etc., He authored few textbooks,
            namely, Remote Sensing and Geographical Information System,
            Geoinformatics for Environmental Management, Digital Image
            Processing and Environmental Science and Technology and
            Environmental Impact Assessment: Theory and Practice, also edited
            the 10 proceeding volumes of International Conference on
            Environmental Management.
          </p>
          <p>
            Reviewer / referee for various national and international journals.
            He is the National expert committee member for Revival of Village
            Ponds project, Earth and Environmental science expert committee for
            the empowerment of women, Expert member of the project Kolleru lake
            restoration management plan of DST, Expert working groups member of
            Hyper spectral signature data base creation project and Village
            knowledge Management System (VKMS) of NRDMS, DST.
            <strong>
              And also worked as the Former Chairman of Andhra Pradesh State
              Environmental Expert Appraisal Committee (SEAC) constituted by
              Ministry of Environment and Forests, Government of India with the
              recommendation of Government of Andhra Pradesh.
            </strong>
            Awards received by him are “Rotary Vocational Excellence Award 2009”
            Presented by Rotary Club of Bhagya Nagar.
            <strong>“AP SCIENTIST AWARD 2010”</strong>
            by Government of Andhra Pradesh in recognition of outstanding
            services rendered in the area of Environmental Sciences and
            Technology, Remote sensing, Surveying and Mapping Best Teacher
            Award-2012 on 05-09-2012 from Govt. of Andhra Pradesh. Indira Gandhi
            Excellence Award on November 2013 by International Business Council,
            New Delhi, India. BharatRatna Sir Mokhagundam Visvesvaraya
            Award-2013.Govt of AP and Institute of Engineers. FELLOW of Andhra
            Pradesh Academy of Sciences, India.
          </p>
          <p>
            For his outstanding contribution in Environmental problem solving,
            pollution control, health and safety, GIS and Remote sensing
            applications for water quality, transportation planning, assessment
            of sedimentation distribution pattern, EIA, Socio- economic
            development through scientific means, He stood not only a
            distinguished Professor in JNTU but also at National and
            International level.
          </p>
        </div>
      </div>
    );
  };

  render() {
    const { home } = this.state;
    return (
      <>
        {home && <Navigate to="/" />}
        <div className="d-flex flex-row justify-content-end m-2">
          <button
            onClick={() => this.setState({ home: true })}
            className="btn btn-light">
            Back
          </button>
        </div>

        <ScrollToTop smooth />
        {this.aboutVc()}
      </>
    );
  }
}
