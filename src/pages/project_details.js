import { useState, useEffect, React } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import '../css/mobile-view.css';

export const Projectdetails = ({final,setFinal}) => {
    // const [project1title, setproject1title] = useState('');
    // const [project1link, setproject1link] = useState('');
    // const [project1description, setproject1description] = useState('');
    // const [project2title, setproject2title] = useState('');
    // const [project2link, setproject2link] = useState('');
    // const [project2description, setproject2description] = useState('');
   
    const {
        project1title,
        project1link,
        project1description,
        project2title,
        project2link,
        project2description,
    }=final


    // useEffect(() => {
    //     setproject1title(localStorage.getItem('project1title'));
    //     setproject1link(localStorage.getItem('project1link'));
    //     setproject1description(localStorage.getItem('project1description'));
    //     setproject2title(localStorage.getItem('project2title'));
    //     setproject2link(localStorage.getItem('project2link'));
    //     setproject2description(localStorage.getItem('project2description'));
    // }, []);

    const history = useHistory();
    const prevStep = () => {
        history.push('/step3');
    }
    const nextStep = (e) => {
        e.preventDefault();
        if (project1title === null || project1link === null || project1description === null) {
            alert("please fill all mandatory fields");
        } else {
            const copy={...final}
            copy[e.target.name]=e.target.value
            setFinal(copy)
            history.push('/step5');
        }
    }

    const handleChange = (event) => {
        setFinal({...final,[event.target.name]:event.target.value})
    }
    return <div className='maincontainer'>
        <div className='output'>
            <h2>PROJECT DETAILS</h2>
            <div id="skillset">
                <h5>PROJECT 1</h5>
                <br />
                <form id='presonal-form'>
                    <div className="row" id='row'>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Title *" value={project1title} onChange={handleChange}  name="project1title"/>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Link *" value={project1link} onChange={handleChange} name="project1link" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Description *" value={project1description} onChange={handleChange} name="project1description" />
                        </div>
                    </div>
                    <br />
                    <h5>PROJECT 2</h5>
                    <br />
                    <div className="row" id='row'>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Title" value={project2title} onChange={handleChange} name="project2title" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Link" value={project2link} onChange={handleChange} name="project2link" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Description" value={project2description} onChange={handleChange} name="project2description" />
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
