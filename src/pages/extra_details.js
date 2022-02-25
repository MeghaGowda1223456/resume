import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../App.css";
import "../css/mobile-view.css";

export const Extradetails = ({ setFinal, final }) => {
  const history = useHistory();
  const [details, setDetails] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    intrest1: "",
    intrest2: "",
    intrest3: "",
    intrest4: "",
    intrest5: "",
    intrest6: "",
    careerobjective: "",
    workshop1: "",
    workshop2: "",
    personalskill1: "",
    personalskill2: "",
    personalskill3: "",
    personalskill4: "",
    personalskill5: "",
    personalskill6: "",
  });
  const {
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    intrest1,
    intrest2,
    intrest3,
    intrest4,
    intrest5,
    intrest6,
    careerobjective,
    workshop1,
    workshop2,
    personalskill1,
    personalskill2,
    personalskill3,
    personalskill4,
    personalskill5,
    personalskill6,
  } = details;
  const handleChange = (event) => {
    const detailsCopy = { ...details };
    detailsCopy[event.target.name] = event.target.value;
    setDetails(detailsCopy);
  };
  // const [skill1, setskill1] = useState('');
  // const [skill2, setskill2] = useState('');
  // const [skill3, setskill3] = useState('');
  // const [skill4, setskill4] = useState('');
  // const [skill5, setskill5] = useState('');
  // const [skill6, setskill6] = useState('');
  // const [intrest1, setintrest1] = useState('');
  // const [intrest2, setintrest2] = useState('');
  // const [intrest3, setintrest3] = useState('');
  // const [intrest4, setintrest4] = useState('');
  // const [intrest5, setintrest5] = useState('');
  // const [intrest6, setintrest6] = useState('');
  // const [careerobjective, setcareerobjective] = useState('');
  // const [workshop1, setworkshop1] = useState('');
  // const [workshop2, setworkshop2] = useState('');
  // const [personalskill1, setpersonalskill1] = useState('');
  // const [personalskill2, setpersonalskill2] = useState('');
  // const [personalskill3, setpersonalskill3] = useState('');
  // const [personalskill4, setpersonalskill4] = useState('');
  // const [personalskill5, setpersonalskill5] = useState('');
  // const [personalskill6, setpersonalskill6] = useState('');

  // useEffect(() => {
  //     setskill1(localStorage.getItem('skill1'));
  //     setskill2(localStorage.getItem('skill2'));
  //     setskill3(localStorage.getItem('skill3'));
  //     setskill4(localStorage.getItem('skill4'));
  //     setskill5(localStorage.getItem('skill5'));
  //     setskill6(localStorage.getItem('skill6'));
  //     setintrest1(localStorage.getItem('intrest1'));
  //     setintrest2(localStorage.getItem('intrest2'));
  //     setintrest3(localStorage.getItem('intrest3'));
  //     setintrest4(localStorage.getItem('intrest4'));
  //     setintrest5(localStorage.getItem('intrest5'));
  //     setintrest6(localStorage.getItem('intrest6'));
  //     setcareerobjective(localStorage.getItem('careerobjective'));
  //     setworkshop1(localStorage.getItem('workshop1'));
  //     setworkshop2(localStorage.getItem('workshop2'));
  //     setpersonalskill1(localStorage.getItem('personalskill1'));
  //     setpersonalskill2(localStorage.getItem('personalskill2'));
  //     setpersonalskill3(localStorage.getItem('personalskill3'));
  //     setpersonalskill4(localStorage.getItem('personalskill4'));
  //     setpersonalskill5(localStorage.getItem('personalskill5'));
  //     setpersonalskill6(localStorage.getItem('personalskill6'));

  // }, []);

  const prevStep = () => {
    history.push("/step2");
  };
  const nextStep = (e) => {
    e.preventDefault();
    if (
      skill1 === null ||
      skill2 === null ||
      intrest1 === null ||
      intrest2 === "" ||
      careerobjective === null ||
      workshop1 === null ||
      personalskill1 === null ||
      personalskill2 === null
    ) {
      alert("please fill all mandatory fields");
    } else {
      const copy = { ...final };
      copy.skill1 = details.skill1;
      copy.skill2 = details.skill2;
      copy.skill3 = details.skill3;

      copy.skill4 = details.skill4;
      copy.skill5 = details.skill5;
      copy.skill6 = details.skill6;
      copy.intrest1 = details.intrest1;
      copy.intrest2 = details.intrest2;
      copy.intrest3 = details.intrest3;
      copy.intrest4 = details.intrest4;
      copy.intrest5 = details.intrest5;
      copy.intrest6 = details.intrest6;
      copy.careerobjective = details.careerobjective;
      copy.workshop1 = details.workshop1;
      copy.workshop2 = details.workshop2;
      copy.personalskill1 = details.personalskill1;
      copy.personalskill2 = details.personalskill2;
      copy.personalskill3 = details.personalskill3;
      copy.personalskill4 = details.personalskill4;
      copy.personalskill5 = details.personalskill5;
      copy.personalskill6 = details.personalskill6;

      setFinal(copy);
      history.push("/step4");
    }
  };
  return (
    <div className="maincontainer">
      <div className="output">
        <h2>EXTRA DETAILS</h2>
        <div id="skillset">
          <h5>SKILLS/LANGUAGES</h5>
          <br />
          <form id="presonal-form">
            <div className="row" id="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 1 *"
                  value={skill1}
                  onChange={handleChange}
                  name="skill1"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 2 *"
                  value={skill2}
                  onChange={handleChange}
                  name="skill2"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 3"
                  value={skill3}
                  onChange={handleChange}
                  name="skill3"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 4"
                  value={skill4}
                  onChange={handleChange}
                  name="skill4"
                />
              </div>
            </div>
            <br />
            <div className="row" id="margin">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 5"
                  value={skill5}
                  onChange={handleChange}
                  name="skill5"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 6"
                  value={skill6}
                  onChange={handleChange}
                  name="skill6"
                />
              </div>
            </div>
            <br />
            <h5>AREA OF INTREST</h5>
            <br />
            <div className="row" id="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 1 *"
                  value={intrest1}
                  onChange={handleChange}
                  name="intrest1"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 2 *"
                  value={intrest2}
                  name="intrest2"
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 3"
                  value={intrest3}
                  onChange={handleChange}
                  name="intrest3"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 4"
                  value={intrest4}
                  onChange={handleChange}
                  name="intrest4"
                />
              </div>
            </div>
            <br />
            <div className="row" id="margin">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 5"
                  value={intrest5}
                  onChange={handleChange}
                  name="intrest5"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intrest 6"
                  value={intrest6}
                  onChange={handleChange}
                  name="intrest6"
                />
              </div>
            </div>
            <br />
            <h5>CAREER OBJECTIVE</h5>
            <br />
            <div className="row" id="row1">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Career Objective *"
                  value={careerobjective}
                  onChange={handleChange}
                  name="careerobjective"
                />
              </div>
            </div>
            <br />
            <h5>WORKSHOP ATTENDED</h5>
            <br />
            <div className="row" id="row2">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="workshop 1 *"
                  value={workshop1}
                  onChange={handleChange}
                  name="workshop1"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="workshop 2"
                  value={workshop2}
                  onChange={handleChange}
                  name="workshop2"
                />
              </div>
            </div>
            <br />
            <h5>PERSONAL SKILLS</h5>
            <br />
            <div className="row" id="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 1 *"
                  value={personalskill1}
                  onChange={handleChange}
                  name="personalskill1"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 2 *"
                  value={personalskill2}
                  onChange={handleChange}
                  name="personalskill2"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 3"
                  value={personalskill3}
                  onChange={handleChange}
                  name="personalskill3"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 4"
                  value={personalskill4}
                  onChange={handleChange}
                  name="personalskill4"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 5"
                  value={personalskill5}
                  onChange={handleChange}
                  name="personalskill5"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="skill 6"
                  value={personalskill6}
                  onChange={handleChange}
                  name="personalskill6"
                />
              </div>
            </div>
          </form>
        </div>
        <br />
        <div className="btnContainer">
          <Link onClick={prevStep}>Back</Link>
          <Link onClick={nextStep}>Next</Link>
        </div>
      </div>
    </div>
  );
};
