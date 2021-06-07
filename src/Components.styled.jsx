import styled, { css } from 'styled-components';

const mono = css`
    font-family: monospace !important;
`;

const TEXT_VARIATIONS = {
    mono,
};

export const HeadlineThree = styled.h3`
    font-weight: 400;
    cursor: ${(props) => props.clickable ? 'pointer' : 'auto'};

    ${({ variations = '' }) => variations.split(' ').map(variation => TEXT_VARIATIONS[variation])}
`

export const LeftBorderContainer = styled.div`
    border-left: 2px solid #ccc;
`;

export const CenteredText = styled.div`
    text-align: center;
`;

export const Select = styled.select`
    padding: 1rem;
    margin: 1rem auto 2rem;
    display: block;
    text-transform: capitalize;
`;

export const HelperTools = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    opacity: 0.1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    transition: all 250ms ease;
    
    &:hover {
        &, button {
            opacity: 1;
        }
    }
`;

export const Code = styled.div`
    width: 100%;
    color: #e4e4e4;
    background-color: #2b2b2b;
    font-family: monospace;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    line-height: 2;
    overflow: auto;
`;

export const FixedContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 2rem;
    width: 22rem;
    background: rgba(0,0,0,0.4);
    height: 100%;
    overflow-y: auto;
    
    @media (max-width: 950px) {
        position: relative;
        width: 100%;
    }
`;

export const AppContainer = styled.div`
    width: calc(100% - 22rem);
    float: right;

    @media (max-width: 950px) {
        width: 100%;
    }
`;

export const Main = styled.div`
    max-width: 800px;
    padding: 1rem;
    margin: 0 auto;
`;

const transparent = css`
    border: 1px solid #e4e4e4;
    color: #e4e4e4;
    background-color: #2b2b2b;
    font-size: 0.75rem;
    padding: 0.25rem;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
`;

const copy = css`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;

const BUTTON_VARIATIONS = {
    transparent,
    copy
};

export const Button = styled.button`
    font-family: 'Prompt', sans-serif !important;
    background-color: green; /* Green */
    border: none;
    color: #FFF;
    font-weight: 500;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: auto;
    border-radius: 4px;
    cursor: pointer;

    ${({ variations = '' }) => variations.split(' ').map(variation => BUTTON_VARIATIONS[variation])}
`;

export const TextArea = styled.textarea`
    background-color: #2b2b2b;
    width: 100%;
    padding: 1rem;
    color: #e4e4e4;
    font-family: monospace;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const SchoolContainer = styled.div`
    position: relative;

    div {
        padding: 0.5rem 0;
    }
`;