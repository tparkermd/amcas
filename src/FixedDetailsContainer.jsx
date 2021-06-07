import Accordion from './Accordion';

export default function FixedDetailsContainer(props) {
    const {
        scienceList,
        nonScienceList,
        advocacyList,
        researchList,
    } = props;

    return (
        <div style={{ position: 'fixed', bottom: 0, left: 0, padding: '2rem', width: '22rem', background: 'rgba(0,0,0,0.4)', height: '100%', overflowY: 'auto' }}>
            <Accordion
                title="Science Professors"
                hiddenDetails={ <ul> { scienceList.map(val => <li key={val.id}>{val.shortName}</li>) } </ul>}
                defaultOpen={true}
            />
            
            <Accordion
                title="Non-Science Professors"
                hiddenDetails={ <ul> { nonScienceList.map(val => <li key={val.id}>{val.shortName}</li>) } </ul>}
                defaultOpen={true}
            />
            
            <Accordion
                title="Advocacy Focused"
                hiddenDetails={ <ul> { advocacyList.map(val => <li key={val.id}>{val.shortName}</li>) } </ul>}
                defaultOpen={true}
            />
            
            <Accordion
                title="Research Focused"
                hiddenDetails={ <ul> { researchList.map(val => <li key={val.id}>{val.shortName}</li>) } </ul>}
                defaultOpen={true}
            />
            
        </div>
    );
}