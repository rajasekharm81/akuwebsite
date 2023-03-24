import { Component } from "react";

export class History extends Component {
  render() {
    return (
      <div className="d-flex flex-column mt-5 justify-content-center align-items-center col-12">
        <div className=" text-white col-11">
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

export class UniversityAct extends Component {
  render() {
    return (
      <div className="text-white d-flex flex-column justify-content-center align-items-center col-12 p-5">
        <div className="col-10 text-center">
          <h1 className="mb-5">THE ANDHRA PRADESH UNIVERSITIES ACT, 1991</h1>
          <h5>(Act No.4 0/1991)</h5>
          <strong>
            <p>Statement of Objects and Reasons</p>
          </strong>
          <div style={{ textAlign: "justify" }}>
            <p>
              At present there are six conventional Universities in the State,
              each governed by a separate enactment. These Universities are the
              Andhra University and Nagarjuna University in the Andhra Area of
              the State, Sri Venkateswara University and Sri Krishnadevaraya
              University in the Rayalaseema region, the Osmania University and
              the Kakatiya University in the Telangana area of the State.The
              provisions of the various Universities Acts governing the
              aforesaid Universities are substantially the same with minor
              variations here and there. Whenever there is a change in the
              policy of the Government and an amendment is to be effected,it is
              resulting in the amendment of all the Six Universities Acts,which
              is contributing to legislative duplication. Further if any new
              University is to be establishedwith the sameaims and objects,a
              separate enactment has to be passed. To maintain uniformity of law
              III respect of all the conventional Universities and to easily
              establish any conventional University under the same enactment,
              the Government have decided to enact a singlelawin place
              ofSixUniversities Acts and to bring all the aforesaid
              SixUniversities under new law.
            </p>
            <p>
              Apart from the above aspect of uniformity in the law, the
              ..Govemment have also decided to democratise the functioning of
              the Universities by providing for elected element in the Board
              ofManagement (earlier called as the ExecutiveCouncil) and in the
              Academic Senate: it is also proposed to enlarge themembership of
              the AcademicSenate by drawing persons having rich experience in
              various fields in order to mould the Academic Senate into a highly
              enlightened body.
            </p>
            <p>This Billseeks to give effect to the above decisions.</p>
            <p>
              Appended to L.A. Bill No. 37 of 1990 published in A.P. Gazette
              Part-Tv (Ext.) dt. 11-10-1990.
            </p>
          </div>
        </div>
        <button className="btn">Click here for More Information</button>
      </div>
    );
  }
}

// need another pages

export class Administration extends Component {
  render() {
    return (
      <div className="text-white p-5">
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
      <div className="text-white p-5">
        <h3 className="mb-3">College Categories</h3>
        <h5>UG Colleges</h5>
        <h5>PG Colleges</h5>
        <h5>Professional Course Colleges</h5>
      </div>
    );
  }
}
