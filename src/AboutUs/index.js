import { Component } from "react";

import act41991 from "../assects/act41991.pdf";
// import "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&display=swap";

import location from "../assects/location.jpg";
import prakasamMap from "../assects/prakasamMap.jpg";

import logob from "../assects/logob.jpg";

export class History extends Component {
  render() {
    return (
      <div className="d-flex flex-column mt-5 justify-content-center align-items-center col-12">
        <div className=" text-dark col-11">
          <h1
            className="text-center mb-3"
            style={{ color: "#9900ff", fontFamily: "Georgia" }}>
            History
          </h1>
          <p style={{ textAlign: "justify", fontFamily: "Georgia" }}>
            The Ongole district name has been changed after the late Chief
            Minister of Andhra Pradesh, Andhra Kesari Tanguturi Prakasam
            Panthulu garu. It is one of the backward districts of Andhra
            Pradesh. The district is not only backward in the sphere of Economy,
            but also backward in the field of education especially in higher
            education.The backwardness can overcome in any field will be
            possible only with the provision of avenues of education. In recent
            times, many educationalists and politicians have put serious efforts
            for the promotion of P.G. Centre for Prakasam District. This long
            lasting efforts materialized only during the reign of Prof.
            Y.C.Simhadri garu, the then Vice-Chancellor. He can be considered
            the Founding Father of the A.N.U. Ongole Campus at Ongole.
          </p>
          <p style={{ textAlign: "justify", fontFamily: "Georgia" }}>
            Andhra Kesari University, Ongole, Prakasm District, Andhra Pradesh
            has established with the effect from 11-01-2022 (Notification no. 36
            dated 11.01.2022) by the Act No. 21 of 2021 (Notification No. 21
            dated 20.12.2022) of the State Legislative of Andhra Pradesh as a
            State University and is empowered to award degree as specified by
            the UGC under Section 22 of the UGC Act. 1956 at its own
            departments. The University has offering 9 Post Graduate courses
            i.e., M.Sc. Mathematics, M.Sc. Statistics, M.A. Economics, Master of
            Physical Education (M.P.Ed), Master of Education (M.Ed.), M.A.
            History, M.A. Social Work, Master of commerce and M.B.A. and one UG
            course i.e., Bachelor of Physical Education. Eligible guides are
            also there for research activities of Ph. D.
          </p>
        </div>
      </div>
    );
  }
}

export class VisionAndMission extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center h-100 col-12 mt-5 mb-5">
        <div className="col-12 col-md-10 ">
          <h1
            className="text-center bg-info p-5"
            style={{ fontFamily: "Merriweather" }}>
            Vision And Mission
          </h1>
          <p className="text-align-justify">
            The Vision and Mission statements of the Ongole University reflect
            our determination to assiduously pursue and achieve our goals .The
            University is committed to continue to be at the forefront of
            providing the best tertiary education to our students and acting as
            a catalyst in shaping a bright and sustainable future of our nation
            by acting as a bridge between the University community and the
            community at large{" "}
          </p>
          <h6>Vision :</h6>
          <p className="text-align-justify">
            To provide internationally comparable quality higher education and
            nurture teachers of tomorrow with the transformative knowledge
            focusing upon the integral development of teachers and secular
            ideals of the nation . The vision is not only focused on imparting
            subject knowledge and skills , but also to mould the students with
            better conduct and character committed to the social needs and
            national development.
          </p>
          <h6>Mision :</h6>
          <p className="text-align-justify">
            To foster all-round development and excellence through multi-faceted
            education and sustained engagement with local, national and global
            communities, providing quality teacher education ,nurture lifelong
            inspired learners and make colleges of education excel through
            innovative teaching ,research and extension activities
          </p>
        </div>
        <div className="col-12 col-md-10 ">
          <h5>OUR EMBLEM</h5>
          <div className="d-flex justify-content-center align-items-center">
            <img className="col-6 col-md-4" src={logob} alt="emblem" />
          </div>
          <p>
            The crest and the motto adopted by the Acharya Nagarjuna University
            represent the creative essence of Indian culture oriented to the
            contemporary aspirations. The symbolism is based on the concept that
            all human excellence proceeds from truth and culminates in truth.
            The individual symbols in the crest are emblematically related to
            one another so as to suggest the upward evolution of the life force
            from material plenitude and manifest reality towards spiritual
            magnificence and universal consciousness. The young initiated into
            knowledge at the University shall achieve identity, growth,
            self-differentiation and fulfillment in the various ascensions of
            intellectual and spiritual states shown in the symbolic scheme of
            the crest. The vase of plenty (PURNA-GHATA) is a prototype from the
            Amaravati sculpture of the early centuries of the Christian era. It
            stands for material prosperity on the one hand and objective
            knowledge on the other. Its traditional attributes are sasya
            (fertility), santana (increase), sampat (prosperity) and samriddhi
            (plenitude). The vase is also a paradigmatic representation of the
            Universe and the creative cycle according to ancient Indian
            scriptures. Its face is Vishnu, the sustainer; its neck is Rudra,
            the apocalyptic transformer; its base is Brahma, the creator.
            Arising out of the superabundant water of life sprouting from purna
            ghata and transcending the mundane level, illuminated by the
            resplendent halo of the Sun, is the freshly blossoming Lotus. The
            pool of waters (manasa sarovara) symbolizes the creative. On the
            apex are the dharma-chakra and the Lotus representing the creative
            readiness of the mind to respond to the summons of the creative
            evolution symbolized by the solar orb.
          </p>
          <p>
            On the apex are the dharma-chakra (the wheel of eternal law) flanked
            by harinas (deer), overarched by the visva-padma (the cosmic Lotus)
            flanked by makaras (symbols of the cosmic consciousness). The dharma
            chakra is reminiscent not only of rita but also of the Buddhas
            promulgation of the law (dharma chakrapravartana). The deers, too,
            have a two-fold connotation. On the one had, they represent
            beautitude, and on the other, the highest point of universal
            consciousness. The motto, Satye Sarvam Pratishtitam is an
            epigrammatic representation of the entire symbolism of the crest. It
            is singularly appropriate to the ideals and functions of the
            University which is dedicated to the pursuit of truth which is the
            ultimate abode of all.
          </p>
        </div>
      </div>
    );
  }
}

export class UniversityAct extends Component {
  state = { showPdf: false };
  render() {
    return (
      <>
        <div className="text-dark d-flex flex-column justify-content-center align-items-center col-12 p-5">
          <div className="col-12 col-md-10 text-center">
            <h1 className="mb-5">THE ANDHRA PRADESH UNIVERSITIES ACT, 1991</h1>
            <h5>(Act No.4 0/1991)</h5>
            <strong>
              <p>Statement of Objects and Reasons</p>
            </strong>
            <div style={{ textAlign: "justify" }}>
              <p>
                At present there are six conventional Universities in the State,
                each governed by a separate enactment. These Universities are
                the Andhra University and Nagarjuna University in the Andhra
                Area of the State, Sri Venkateswara University and Sri
                Krishnadevaraya University in the Rayalaseema region, the
                Osmania University and the Kakatiya University in the Telangana
                area of the State.The provisions of the various Universities
                Acts governing the aforesaid Universities are substantially the
                same with minor variations here and there. Whenever there is a
                change in the policy of the Government and an amendment is to be
                effected,it is resulting in the amendment of all the Six
                Universities Acts,which is contributing to legislative
                duplication. Further if any new University is to be
                establishedwith the sameaims and objects,a separate enactment
                has to be passed. To maintain uniformity of law III respect of
                all the conventional Universities and to easily establish any
                conventional University under the same enactment, the Government
                have decided to enact a singlelawin place ofSixUniversities Acts
                and to bring all the aforesaid SixUniversities under new law.
              </p>
              <p>
                Apart from the above aspect of uniformity in the law, the
                ..Govemment have also decided to democratise the functioning of
                the Universities by providing for elected element in the Board
                ofManagement (earlier called as the ExecutiveCouncil) and in the
                Academic Senate: it is also proposed to enlarge themembership of
                the AcademicSenate by drawing persons having rich experience in
                various fields in order to mould the Academic Senate into a
                highly enlightened body.
              </p>
              <p>This Billseeks to give effect to the above decisions.</p>
              <p>
                Appended to L.A. Bill No. 37 of 1990 published in A.P. Gazette
                Part-Tv (Ext.) dt. 11-10-1990.
              </p>
            </div>
          </div>

          <a href={act41991} target="_blank" rel="noreferrer">
            <button
              // onClick={() =>
              //   this.setState((prevState) => ({ showPdf: !prevState.showPdf }))
              // }

              className="btn btn-info">
              Click here for More Information
            </button>
          </a>
        </div>
      </>
    );
  }
}

// need another pages

export class Administration extends Component {
  render() {
    return (
      <div className="text-dark p-5">
        <h1 className="mb-5">University Administration</h1>
        <h5>Vice Chancellor - Prof. M. Anji Reddy</h5>
        <h5>Registrar - Prof. B. Hari Babu</h5>
        <h5>Principal (I/c) - Prof. G. Raja Mohan Rao</h5>
        <h5>Vice-Principal (I/c) - Dr. N. Nirmala Mani</h5>
        <h5>Dean (I/c), CDC - Dr. D. Venkateswara Reddy</h5>
        <h5>Officer On Special Duty (I/c) - Dr. K.V.N Raju</h5>
        <h5>Dean(I/c), Academics - Dr. K. Gangadhar</h5>
        <h5>Controller of Examinations(I/c) - Dr .M. Gnaneswara Reddy</h5>
        <h5>
          Coordinator for Women Empowerment and Women's Grievances Redressal
          Cell (I/c) - Dr. A. Bharati Devi
        </h5>
        <h5>Director (I/c), Directorate of Admissions - Dr. G. Somasekhara</h5>
        <h5>
          University Estate and Infrastructure Development Officer(I/c) - Dr. B.
          Krishna
        </h5>
        <h5>Coordinator(I/c), NSS - Dr. B. Padmaja</h5>
      </div>
    );
  }
}

export class AffliatedColleges extends Component {
  render() {
    return (
      <div className="text-dark p-5">
        <p>
          University has got over 450 affiliated colleges in Krishna, Guntur and
          Prakasam Districts. Details of the colleges
        </p>
        <p>
          Acharya Nagajuna University since then has grown into a large
          University with 39 Academic Departments, including several
          self-financed courses, which started operating since 1992. Its
          jurisdiction was extended to three districts now having over 450
          affiliated colleges offering Under-Graduate, Post-Graduate,
          Engineering, Education, Law, Pharmacy and Oriental Languages courses.
          Now it has 39 Post-graduate teaching-cum-research courses on the
          campus, while 71 affiliated colleges offered P.G. courses. The
          University runs two P.G. centers-one at Ongole (a fully self-financed
          center) and another at Nuzvid (aided).
        </p>
        <p>
          The University has been continuously achieving progress during these
          30 years, in terms of introducing new subjects in the University
          College. For instance, two new P.G. courses, in Hindi, and Tourism &
          Travel management were introduced last year. New courses were started
          from the academic year: B.P. Ed. and M.P. Ed in the department of
          Physical Education, while M.B.A. in Health Administration, M. Ed in
          the department of Education and M.Sc. in Medical Technology are
          jointly awarded by A.N.U. and N.T.R. University of Health Sciences.
          Five year Integrated M.B.A., Programme in International Finance is
          started. This University has also pioneered the introduction of
          self-financed courses in the country, which is in conformity with the
          thinking of the national education policy makers such as the
          University Grants Commission. The University is making concerted
          efforts towards resource mobilization on different fronts.
        </p>
        <p>
          The policy of the University is to encourage the University College
          and the affiliated colleges to introduce job-oriented courses at the
          Degree and Post-Graduate levels. Academic autonomy was extended to
          four of the colleges as per the directions of the University Grants
          Commission, New Delhi. The University has ensured that, while there is
          a need for quantitative improvement with the increasing demand for
          higher education, from the community at large, the quality of
          education offered at various levels is also maintained at a high
          level. The University has been striving to maintain high academic
          standards in consonance with quantitative increase in the number of
          students being enrolled every year.
        </p>
        <p>
          Teaching and Research are the two eyes and twin goals of the faculty
          in the University College. The research programmes carried out in the
          various Departments cover both fundamental and applied areas. The
          academic Departments seek to find a reasonable and useful balance
          between the world of knowledge and its use and application in a more
          concrete and realizable form. The research programmes and course
          content focus on these issues and attempt to find solutions, so that
          feedback obtained by such an interaction could be used to bridge the
          gap between learning and its utility value.
        </p>
        <p>
          The Humanities and Social Sciences Departments in the Campus have been
          engaged in the task of studying the many socio-economic problems.
          Besides general areas, the research projects also cover a study of the
          problems of women, the oppressed classes of the society (both social
          and economic) and the problems of governance. The interaction between
          the funding agencies and their beneficiaries and the managerial
          problems in industries form other research pre-occupations of the
          University. The need for providing legal advice to the needy is
          winning the attention of the researchers.
        </p>
        <p>
          The Science Departments are engaged in carrying out work related to
          the growing scientific knowledge in solving the problems of society,
          like the study of pollution hazards and their prevention during
          development by isolating and characterizing the active principles from
          both floral and microbial sources; finding alternative energy sources,
          development of new varieties and hybrids in chilies, computer
          applications and software development augmenting and preserving fuel
          supplies and other bio-mass sources, defense research, exploring
          non-conventional energy sources, aquaculture development, liquid
          crystals preparation and study of their physical properties,
          microbiology and psychopathology, etc., all of which have a bearing on
          the day-to-day problems of society. Knowledge is thus not merely an
          end in itself but also a means to serve the society which funds the
          educational institutions and this practical side has not been ignored
          by the University. Emphasis on research, especially with a strong
          socio-economic bias has also made the University initiate schemes and
          projects of practical utility.
        </p>
        <h5 style={{ textDecoration: "underline" }}>Location:- </h5>
        <div className=" d-flex col-12 justify-content-center align-self-center">
          <img className="col-10" src={location} alt="location" />
        </div>
        <h5 className=" mt-4" style={{ textDecoration: "underline" }}>
          Territorial jurisdiction
        </h5>
        <div className=" d-flex col-12 justify-content-center align-self-center">
          <img className="col-9" src={prakasamMap} alt="location" />
        </div>
      </div>
    );
  }
}
