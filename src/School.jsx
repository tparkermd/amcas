import SchoolDetail from "./SchoolDetail";

export default function School(props) {
    const {
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
    } = props.school;

    const {
        addToScienceList,
        addToNonScienceList,
        addToAdvocacyList,
        addToResearchList,
        specialty,
    } = props;

    return (
        <div className="school" id={id} style={{ position: 'relative' }}>
            <h2>{shortName}</h2>
            <SchoolDetail title="AMCAS letters participation" details={!!amcasLettersInd} />
            <SchoolDetail title="Min Letters" details={amcasLettersMin} />
            <SchoolDetail title="Max Letters" details={amcasLettersMax} />
            <SchoolDetail title="Mission Statement for Context" details={missionStatement} />
            <SchoolDetail title="Letter Guidance" details={letterGuidance} />
            <SchoolDetail title="Additional letter of evaluation information" details={amcasLettersText} />

            <div>
                <strong>Committee Letter Accepted</strong>
                <br />
                {committeeLetterAccepted && (committeeLetterAccepted === 'P' ? 'Preferred' : 'Accepted')}
            </div>

            <div>
                <strong>Individual Letter Accepted</strong>
                <br />
                {individualLetterAccepted && (individualLetterAccepted === 'P' ? 'Preferred' : 'Accepted')}
            </div>

            <div>
                <strong>Letter Packets Accepted</strong>
                <br />
                {letterPacketsAccepted && (letterPacketsAccepted === 'P' ? 'Preferred' : 'Accepted')}
            </div>

            <div>
                <strong>{specialty} %</strong>
                <br />
                <span className="specialty">{medSchoolSpecialty[specialty]}</span>%
            </div>

            <br />
            <hr />
            <br />

            <div className="helperTools">
                <button className="transparent" onClick={() => addToScienceList(id)}>
                    Add to Science List
                </button>
                <button className="transparent" onClick={() => addToNonScienceList(id)}>
                    Add to Non-Science List
                </button>
                <button className="transparent" onClick={() => addToAdvocacyList(id)}>
                    Add to Advocacy List
                </button>
                <button className="transparent" onClick={() => addToResearchList(id)}>
                    Add to Research List
                </button>
            </div>
        </div>
    )
}