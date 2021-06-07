import { useState } from 'react';
import { HeadlineThree, LeftBorderContainer } from './Components.styled';

export default function Accordion(props) {
    const {
        title,
        hiddenDetails,
        defaultOpen,
    } = props;

    const [isOpen, setIsOpen] = useState(defaultOpen);


    return (
        <div>
            <HeadlineThree clickable onClick={() => setIsOpen(!isOpen)}>{title}</HeadlineThree>
            {isOpen && (
                <LeftBorderContainer>
                    {hiddenDetails}
                </LeftBorderContainer>
            )}
        </div>
    )
}