import { useEffect, useState } from 'react';

import './App.css';
import FixedDetailsContainer from './FixedDetailsContainer';
import Instructions from './Instructions';
import School from './School';
import Welcome from './Welcome';

const getLocalStorage = (value) => localStorage && localStorage.getItem && localStorage.getItem(value);
const setLocalStorage = (key, value) => localStorage && localStorage.setItem && localStorage.setItem(key, value);
const ensureUnique = (arr) => [...new Set(arr)];

function App() {
    const [schools, setSchools] = useState([]);
    const [schoolIds, setSchoolIds] = useState([]);
    const [scienceList, setScienceList] = useState([]);
    const [nonScienceList, setNonScienceList] = useState([]);
    const [advocacyList, setAdvocacyList] = useState([]);
    const [researchList, setResearchList] = useState([]);
    const [specialty, setSpecialty] = useState('');
    
    const getSchoolWithId = (id) => schools.find(school => school.id === id);

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
                    medSchoolSpecialty,
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
                    medSchoolSpecialty,
                    missionStatement,
                    id,
                }

                setSchools(prev => [...prev, constructedData])
            }).catch(console.log);
    }
    
    useEffect(() => setSchoolIds((getLocalStorage('SCHOOL_IDS') || '').split(',') || []), [])
    useEffect(() => setLocalStorage('SCHOOL_IDS', schoolIds), [schoolIds])
    useEffect(() => {
        schoolIds.forEach((id) => !schools.find(school => school.id === id) && fetchData(id))
    }, [schoolIds]);
    
    const sortSpecialty = () => {
        const unsortedSchools = [...schools];
        const sorted = unsortedSchools.sort((a, b) => b.medSchoolSpecialty[specialty] - a.medSchoolSpecialty[specialty]);
        
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
        const ids = e.target.value.replace('[', '').replace(']', '').replace(/\n|"|\s+/g, '').split(',');
        Array.isArray(ids) && setSchoolIds([...new Set(ids)]);
    };

    const addToScienceList = (id) => setScienceList(prev => ensureUnique([...prev, getSchoolWithId(id)]));
    const addToNonScienceList = (id) => setNonScienceList(prev => ensureUnique([...prev, getSchoolWithId(id)]));
    const addToAdvocacyList = (id) => setAdvocacyList(prev => ensureUnique([...prev, getSchoolWithId(id)]));
    const addToResearchList = (id) => setResearchList(prev => ensureUnique([...prev, getSchoolWithId(id)]));


    return (
        <div>
            <FixedDetailsContainer 
                scienceList={scienceList}
                nonScienceList={nonScienceList}
                advocacyList={advocacyList}
                researchList={researchList}
            />
            <div className="App">
                <div className="Main">
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

                    <div style={{ textAlign: 'center' }}>
                        Select Specialty
                        <select 
                            style={{ padding: '1rem', margin: '1rem auto 2rem', display: 'block' }}
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                        >
                            { 
                                schools[0] && schools[0].medSchoolSpecialty && (
                                    Object.keys(schools[0].medSchoolSpecialty).map(sp => <option value={sp}>{sp}</option>)
                                )
                            }
                        </select>
                    </div>
                    <div className="button-container">
                        <button onClick={sortSpecialty}> Sort Specialty % </button>
                        <button onClick={sortMax}> Sort Max Number LOR Accepted</button>
                        <button onClick={sortName}> Sort Name</button>
                    </div>

                    <br />
                    <hr />
                    <br />

                    <ul>
                        { schools.map((school) => <li><a href={`#${school.id}`}>{school.shortName}</a></li>) }
                    </ul>

                    <br />
                    <hr />
                    <br />

                    { schools.map((school) => (
                        <School
                            school={school}
                            key={school.id}
                            specialty={specialty}
                            addToScienceList={addToScienceList}
                            addToNonScienceList={addToNonScienceList}
                            addToAdvocacyList={addToAdvocacyList}
                            addToResearchList={addToResearchList}
                        />
                    )) }
                </div>
            </div>
        </div>
    );
}

export default App;
        