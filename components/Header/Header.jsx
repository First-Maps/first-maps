import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderText = styled.p`
font-family: sans-serif;
font-size: 23.5px;
font-weight: 600;
`;

const SeeAll = styled.p`
font-family: sans-serif;
color: #F8893C; 
font-size: 16px;
padding-left: 80px;
// order: 0;
// align-self: flex-start;
// position: relative;
// top: -110px;
// left: -80px;
`;

const HeaderBox = styled.div`
display: flex;
align-items: center;
flex-direction:${props=>props.dir};
`;

export default function Header({
label,
text,
dir="row"

}){
    return(
        <HeaderBox dir={dir}>
            <HeaderText>{label}</HeaderText>
            <SeeAll>{text}</SeeAll>
        </HeaderBox>
    )
}

Header.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
}
    
Header.defaulProps = {
    label:'',
    text:'',
}