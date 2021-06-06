import { useEffect, useState } from 'react';
import './App.css';
import Instructions from './Instructions';
import School from './School';
import Welcome from './Welcome';

// How to extract school IDs
// v = [];
// document.querySelectorAll('[href*=medSchoolDetails]').forEach(x => v.push(x.getAttribute('href').split('/').pop()));
// copy(v);

function App() {
    const [schools, setSchools] = useState([]);
    const [schoolIds, setSchoolIds] = useState([]);
    const fetchData = (id) => {
        fetch(`https://api.mec.aamc.org/msar-service/medSchool/${id}/profile/CURRENT_EDITION`)
        .then(x => x.json())
        .then(x => {
            const data = x[0];
            
            let {
                shortName,
                medSchoolApplication: {
                    amcasLettersInd,
                    amcasLettersMin,
                    amcasLettersMax,
                    amcasLettersText,
                    letterGuidance,
                    committeeLetterAccepted,
                    individualLetterAccepted,
                    letterPacketsAccepted,
                },
                medSchoolSpecialty: { psychiatry },
                medSchoolInformation: { missionStatement },
            } = data;
            
            amcasLettersMax = amcasLettersMax || 1000;
            amcasLettersMin = amcasLettersMin || 1;
            letterGuidance = letterGuidance || 'No guidance, just suffering';
            amcasLettersText = amcasLettersText || 'Sheesh, no additional information?';
            
            const constructedData = {
                shortName,
                amcasLettersInd,
                amcasLettersMin,
                amcasLettersMax,
                amcasLettersText,
                letterGuidance,
                committeeLetterAccepted,
                individualLetterAccepted,
                letterPacketsAccepted,
                psychiatry,
                missionStatement
            }

            setSchools(prev => [...prev, constructedData])
        }).catch(console.log);
    }
    
    useEffect(() => setSchoolIds((localStorage.getItem('SCHOOL_IDS') || '').split(',') || []), [])
    useEffect(() => localStorage.setItem('SCHOOL_IDS', schoolIds), [schoolIds])
    useEffect(() => schoolIds.forEach(fetchData), [schoolIds]);
    
    const sortSpecialty = () => {
        const unsortedSchools = [...schools];
        const sorted = unsortedSchools.sort((a, b) => b.psychiatry - a.psychiatry);
        
        setSchools(sorted);
    }

    const sortMax = () => {
        const unsortedSchools = [...schools];
        const sorted = unsortedSchools.sort((a, b) => b.amcasLettersMax - a.amcasLettersMax);
        
        setSchools(sorted);
    }

    const sortName = () => {
        const unsortedSchools = [...schools];
        const sorted = unsortedSchools.sort((a, b) => b.shortName < a.shortName ? 1 : -1);
        
        setSchools(sorted);
    }

    const updateSchoolIds = (e) => {
        const val = e.target.value.replace('[', '').replace(']', '').replace(/\n|"|\s+/g, '').split(',');
        Array.isArray(val) && setSchoolIds(val);
    };

    return (
        <div className="App">
            <Welcome />
            <Instructions />

            <h3 className="mono">
                Paste your copied School IDs into the box below.
            </h3>
            <textarea onChange={updateSchoolIds} value={schoolIds} rows="10" placeholder="Enter your school ids here." />
            
            <br />
            <br />
            <br />
            <hr />
            <br />

            <div className="button-container">
                <button onClick={sortSpecialty}> Sort Specialty % </button>
                <button onClick={sortMax}> Sort Max Number LOR Accepted</button>
                <button onClick={sortName}> Sort Name</button>
            </div>

            <br />
            <hr />
            <br />

            { schools.map((school, index) => <School school={school} key={index} />) }
        </div>
    );
}

export default App;
        