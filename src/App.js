
import './App.css';
import { HashRouter as Router, Switch, Route, } from 'react-router-dom';
import { Homepage } from './pages/home_page';
import { Studentdetails } from './pages/student_details';
import React, { useState } from 'react';
import { createBrowserHistory } from 'history'
import { Educationaldetails } from './pages/educational_details';
import { Extradetails } from './pages/extra_details';
import { Stepindicator } from './pages/step_indicator';
import { Projectdetails } from './pages/project_details';
import { Personaldetails } from './pages/personal_detail';
import { Finalresume } from './pages/final_resume';
const newHistory = createBrowserHistory();

const App=()=>{
  const [final,setFinal]=useState({
        skill1:"",
        skill2:'',
        skill3:'',
        skill4:"",
        skill5:'',
        skill6:'',
        intrest1:'',
        intrest2:'',
        intrest3:'',
        intrest4:'',
        intrest5:'',
        intrest6:'',
        careerobjective:'',
        workshop1:'',
        workshop2:'',
        personalskill1:'',
        personalskill2:'',
        personalskill3:'',
        personalskill4:'',
        personalskill5:'',
        personalskill6:'',

        // educaton
        collegename:"",
        collegedate:"",
        collegecgpa:"",
        collegequalification:'',
        collegedescription:"",
        hscschoolname:"",
        hscschooldate:"",
        hscschoolpercentage:"",
        hscschoolqualification:"",
        hscschooldescription:"",
        sslcschoolname:"",
        sslcschooldate:"",
        sslcschoolpercentage:"",
        sslcschoolqualification:"",

        //personal details
        fathername:"",
        dateofbirth:"",
        gender:"",
        maritalstatus:"",
        nationality:"",
        languageproficiency:"",
        place:"",

        //student_details
        firstname:"",
        lastname:"",
        email:"",
        phonenumber:"",
        address:"",
        github:"",
        linkedin:"",
        twitter:"",
        facebook:"",
        instagram:"",
        photo:"",
  })
  
    return (
      <Router history={newHistory} >
        <Homepage />
        <br /><br />
        <Stepindicator />
        <br />
        <Switch>
          <Route exact path="/">
            <Studentdetails setFinal={setFinal} final={final} />
          </Route>
          <Route exact path="/step1">
            <Studentdetails setFinal={setFinal} final={final} />
          </Route>
          <Route exact path="/step2">
            <Educationaldetails setFinal={setFinal} final={final}/>
          </Route>
          <Route exact path="/step3">
            <Extradetails setFinal={setFinal} final={final} />
          </Route>
          <Route exact path="/step4">
            <Projectdetails setFinal={setFinal} final={final}/>
          </Route>
          <Route exact path="/step5">
            <Personaldetails setFinal={setFinal} final={final}/>
          </Route>
          <Route exact path="/step6">
            <Finalresume final={final} />
          </Route>
        </Switch>

      </Router>

    );
  }



export default App;
