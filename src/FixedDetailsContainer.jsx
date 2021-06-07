import Accordion from './Accordion';
import { FixedContainer } from './Components.styled';

export default function FixedDetailsContainer(props) {
    const {
        scienceList,
        nonScienceList,
        advocacyList,
        researchList,
    } = props;

    return (
        <FixedContainer>
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
        </FixedContainer>
    );
}