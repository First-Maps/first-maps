import styled from 'styled-components'

const TxtWrapper = styled.div`
    min-width: 238px;
    min-height: 15px;
    display: flex;
    flex-direction: flex-start;
`

const Header = styled.h1`
    font-size: 1.5em;
    color: #333333;
    font-weight: 600;
    padding: 0;

    @media (prefers-color-scheme: dark) {
        color: #F5F5F5;
    }
`

const SubHead = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: ${props => props.light ? '#E5E5E5' : '#333333'};
    padding: 0;
`

export default function Head({
    txt = 'Headline',
    light = true, //set to 'light' for light text
}) {

    return (
        <>
            {light ? <Header light>{txt}</Header> : <Header>{txt}</Header>}
        </>
    )
}

export const Sub = ({
    txt,
    light
}) => {
    return <>
        {light ? <SubHead light>{txt}</SubHead> : <SubHead>{txt}</SubHead>}

    </>
    
}