import './ItemBox.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { useState } from 'react';


const LangText = styled.p`
  padding-top: 3em;
  padding-left: 1.5em;
  color: white;
  font-family: sans-serif;
  margin: 0;
`


// make text centered, make photo cover the itembox
const BubbleBox = styled.div`
  background-image: linear-gradient(to bottom, grey, transparent), url("${props => props.img}");
  border-radius: 18px;
  cursor: pointer;
  margin-bottom: ${props => props.margb};
  margin-left: ${props => props.margy};
  min-width: ${props => props.width};
  min-height: ${props => props.height};
  filter: drop-shadow(5px 5px 10px rgba(248, 137, 60, 0.4));
  background-size: cover;

  
  
  &:hover {
    transition-property: filter;
    filter: brightness(1.15);
    transform: scale(1.03);
  }
`

export default function ItemBox({
  label,
  width='115px',
  height='137px',
  margb='1.5em',
  margy='0',
  onClick=()=>{},
  category={category},
  img="/placeholder02.jpg"
}){
  const [show, setShow] = useState(true)
  return (
        <BubbleBox margb={margb} margy={margy} onClick={onClick} width={width} height={height} category={category} img={img}>
          <LangText>{label}</LangText>
        </BubbleBox>
  )
}

ItemBox.propTypes = {
label: PropTypes.string
}

ItemBox.defaulProps = {
label:'',
}






{/* <div className="Itembox"> */}
//115px
// 137px
//{/* <img src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/thumbnails/41a929c8-9efb-45c7-99a3-bf0ea227c3dd.jpg" alt="placeholder" /> */}

