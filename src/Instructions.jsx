import copy from 'copy-to-clipboard';

const instructionsText = `
// Code to paste into the console to extract School IDs
v = [];
document.querySelectorAll('[href*=medSchoolDetails]').forEach(x => v.push(x.getAttribute('href').split('/').pop()));
copy(v);
`
export default function Instructions() {
    return (
        <>
            <div>
                <h3 className="mono">Instructions</h3>
                <ol>
                    <li>First, go to your <a href="https://mec.aamc.org/msar-ui/#/favorites" rel="noreferrer" target="_blank">Favorites Dashboard</a> in the MSAR tool.</li>
                    <li>Ensure you have added all the schools for which you need LOR data.</li>
                    <li>Right click on the page and click "Inspect Element" or "Inspect" or something of that nature.</li>
                    <li>
                        Look for the "Console" interface. If you are struggling to find it, hold down
                        <div className="code">CMD (or CTRL) + Shift + P</div>
                        Then type "Console" and select the "Show Console" item.</li>
                    <li>Paste the below code into the Console and then hit enter.
                        <div className="code" style={{ position: 'relative' }}>
                            {instructionsText}
                            <button className="copy" onClick={() => copy(instructionsText)}>COPY</button>
                        </div>
                    </li>
                </ol>
            </div>
            <br />
        </>
    )
}