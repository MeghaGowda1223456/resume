import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../css/mobile-view.css";
import Uploady from "@rpldy/uploady";
import UploadPreview from "@rpldy/upload-preview"
import UploadButton from "@rpldy/upload-button"

export const Studentdetails = ({final,setFinal}) => {
  const history = useHistory();
  // const [firstname, setfirstname] = useState("");
  // const [lastname, setlastname] = useState("");
  // const [email, setemail] = useState("");
  // const [phonenumber, setphonenumber] = useState("");
  // const [address, setaddress] = useState("");
  // const [github, setgithub] = useState("");
  // const [linkedin, setlinkedin] = useState("");
  // const [twitter, settwitter] = useState("");
  // const [facebook, setfacebook] = useState("");
  // const [instagram, setinstagram] = useState("");
  // const [photo, setphoto] = useState("");
  const [pDetails, setpDetails] = useState({
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
  });

  const {
    firstname,
    lastname,
    email,
    phonenumber,
    address,
    github,
    linkedin,
    twitter,
    facebook,
    instagram,
    photo,
  }=pDetails
  const nextStep = (e) => {
    e.preventDefault();
    if (
      firstname === null ||
      lastname === null ||
      email === null ||
      phonenumber === null ||
      address === null
    ) {
      alert("please fill the mandatory fields");
    } else {
      const copy={...final}
     copy.firstname=pDetails.firstname
    copy.lastname=pDetails.lastname
       copy.email=pDetails.email
     copy.phonenumber=pDetails.phonenumber
      copy.address=pDetails.address
      copy.github=pDetails.github
      copy.linkedin=pDetails.linkedin
      copy.twitter=pDetails.twitter
      copy.facebook=pDetails.facebook
      copy.instagram=pDetails.instagram
      copy.photo=pDetails.photo
      setFinal(copy)
      history.push({ pathname: "/step2" });
    }
  };


   const handleChange = (event) => {
    const pDetailsCopy = { ...pDetails }
    pDetailsCopy[event.target.name] = event.target.value
    setpDetails(pDetailsCopy)
}
  // useEffect(() => {
  //   setfirstname(localStorage.getItem("firstname"));
  //   setlastname(localStorage.getItem("lastname"));
  //   setemail(localStorage.getItem("email"));
  //   setphonenumber(localStorage.getItem("phonenumber"));
  //   setaddress(localStorage.getItem("address"));
  //   setgithub(localStorage.getItem("github"));
  //   setlinkedin(localStorage.getItem("linkedin"));
  //   settwitter(localStorage.getItem("twitter"));
  //   setfacebook(localStorage.getItem("facebook"));
  //   setinstagram(localStorage.getItem("instagram"));
  //   setphoto(localStorage.getItem("photo"));
  // }, []);

  const filterBySize = (file) => {
    //filter out images larger than 5MB
    return file.size <= 5242880;
  };

  return (
    <div className="maincontainer">
      <div className="output">
        <h2>PROFILE DETAILS</h2>
        <form id="presonal-form">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={firstname}
                onChange={handleChange}
                name="firstname"
                placeholder="First name *"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={lastname}
                onChange={handleChange}
                name="lastname"
                placeholder="Last name *"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={handleChange}
                name="email"
                placeholder="Email *"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={phonenumber}
                onChange={handleChange}
                name="phonenumber"
                placeholder="Mobile *"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={handleChange}
                name="address"
                placeholder="Address *"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={github}
                onChange={handleChange}
                name="github"
                placeholder="Github"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={linkedin}
                onChange={handleChange}
                name="linkedin"
                placeholder="Linked In"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={twitter}
                onChange={handleChange}
                name="twitter"
                placeholder="Twitter"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={facebook}
                onChange={handleChange}
                name="facebook"
                placeholder="Facebook"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={instagram}
                onChange={handleChange}
                name="instagram"
                placeholder="Instagram"
              />
            </div>
            
          </div>
        </form>
        <div className="btnContainer">
          <Link to="/step2" onClick={nextStep}>
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};
