import { useState } from 'react';

export default function Accordion(props) {
    const {
        title,
        hiddenDetails,
        defaultOpen,
    } = props;

    const [isOpen, setIsOpen] = useState(defaultOpen);


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