import { useState } from 'react';

export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);

    const {
        title,
        hiddenDetails,
    } = props;

    return (
        <div>
            <strong onClick={() => setIsOpen(!isOpen)}>{title}</strong>
            {isOpen && (
                <div>
                    {hiddenDetails}
                </div>
            )}
        </div>
    )
}