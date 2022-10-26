import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
const HeaderText = styled.p`
font-family: sans-serif;
font-size: 23.5px;
font-weight: 600;
`;

const SeeAll = styled.p`
font-family: sans-serif;
color: #F8893C; 
font-size: 16px;
padding-left:${props=>props.padl};
cursor: pointer;
// order: 0;
// align-self: flex-start;
// position: relative;
// top: -110px;
// left: -80px;
`;

const HeaderBox = styled.div`
display: flex;
align-items:${props=>props.ali};
justify-content: start;
flex-direction:${props=>props.dir};
`;

export default function Header({
label,
text,
dir="row",
ali="center",
padl="80px",
onClick=()=>{},

}){
    const [show, setShow] = useState(true)
    return(
        // <div onClick={()=>setShow(false)}>
        <HeaderBox dir={dir} ali={ali}>
            <HeaderText>{label}</HeaderText>
            <SeeAll onClick={onClick} padl={padl}>{text}</SeeAll>
        </HeaderBox>
        // </div>
    )
}

// export function Header2({
// label,
// text,
// dir="column-reverse"

// }){
//     return(
//         <HeaderBox dir={dir}>
//             <SeeAll>{text}</SeeAll>
//             <HeaderText>{label}</HeaderText>
//         </HeaderBox>
//     )
// }

Header.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
}
    
Header.defaulProps = {
    label:'',
    text:'',
}