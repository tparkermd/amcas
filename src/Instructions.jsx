import copy from 'copy-to-clipboard';
import { Code, Button, HeadlineThree } from './Components.styled';

const instructionsText = `
v = [];
document.querySelectorAll('[href*=medSchoolDetails]').forEach(x => v.push(x.getAttribute('href').split('/').pop()));
copy(v);
`
export default function Instructions() {
    return (
        <>
            <div>
                <HeadlineThree variations="mono">Instructions</HeadlineThree>
                <ol>
                    <li>First, go to your <a href="https://mec.aamc.org/msar-ui/#/favorites" rel="noreferrer" target="_blank">Favorites Dashboard</a> in the MSAR tool.</li>
                    <li>Ensure you have added all the schools for which you need LOR data.</li>
                    <li>Right click on the page and click "Inspect Element" or "Inspect" or something of that nature.</li>
                    <li>
                        Look for the "Console" interface. If you are struggling to find it, hold down
                        <Code>CMD (or CTRL) + Shift + P</Code>
                        Then type "Console" and select the "Show Console" item.</li>
                    <li>Paste the below code into the Console and then hit enter.
                        <Code style={{ position: 'relative' }}>
                            {instructionsText}
                            <Button variations="transparent copy" onClick={() => copy(instructionsText)}>COPY</Button>
                        </Code>
                    </li>
                </ol>
            </div>
            <br />
        </>
    )
}