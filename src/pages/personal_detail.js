
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import { useState, useEffect, React } from 'react';
import '../css/mobile-view.css';

export const Personaldetails = ({final,setFinal}) => {
    const history = useHistory();
    // const [fathername, setfathername] = useState('');
    // const [dateofbirth, setdateofbirth] = useState('');
    // const [gender, setgender] = useState('');
    // const [maritalstatus, setmaritalstatus] = useState('');
    // const [nationality, setnationality] = useState('');
    // const [languageproficiency, setlanguageproficiency] = useState('');
    // const [place, setplace] = useState('');


    const {
        fathername,
        dateofbirth,
        gender,
        maritalstatus,
        nationality,
        languageproficiency,
        place,
    }=final
    // useEffect(() => {
    //     setfathername(localStorage.getItem('fathername'));
    //     setdateofbirth(localStorage.getItem('dateofbirth'));
    //     setgender(localStorage.getItem('gender'));
    //     setmaritalstatus(localStorage.getItem('maritalstatus'));
    //     setnationality(localStorage.getItem('nationality'));
    //     setlanguageproficiency(localStorage.getItem('languageproficiency'));
    //     setplace(localStorage.getItem('place'));
    // }, []);

    const prevStep = () => {
        history.push('/step4');
    }
    const nextStep = (e) => {
        e.preventDefault();
        if (fathername === null || dateofbirth === "" || gender === "" ||
            maritalstatus === null || nationality === "" || languageproficiency === "" || place === null) {
            alert("please fill mandatory fields");
        } else {
            history.push('/step6');
        }

    }

    const handleChange = (event) => {
        setFinal({...final, [event.target.name]:event.target.value});
    }
    return <div className='maincontainer'>
        <div className='output'>
            <h2>PERSONAL DETAILS</h2>
            <br />
            <div id="skillset">
                <form id='presonal-form'>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Father Name *" value={fathername} onChange={handleChange} name="fathername" />
                        </div>

                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Date Of Birth *" onFocus={(e) => e.target.type = 'date'} value={dateofbirth} onChange={handleChange} name="dateofbirth" />
                        </div>

                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <select className="form-control" placeholder="Gender *" value={gender} onChange={handleChange} name="gender">
                                <option value="" disabled={true}>Gender *</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <select className="form-control" placeholder="Marital Status *" value={maritalstatus} onChange={handleChange} name="maritalstatus" >
                                <option value="" disabled={true}>Marital Status *</option>
                                <option value="married">Married</option>
                                <option value="un married">Un Married</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nationality *" value={nationality} onChange={handleChange} name="nationality"/>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Language Proficiency *" value={languageproficiency} onChange={handleChange} name="languageproficiency" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="place *" value={place} onChange={handleChange} name="place" />
                        </div>
                    </div>
                </form>
                <br />
                <div className='btnContainer'>
                    <Link onClick={prevStep}>Back</Link>
                    <Link onClick={nextStep}>Next</Link>
                </div>
            </div>
        </div>
    </div>;
};
