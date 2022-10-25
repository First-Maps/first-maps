import styled from 'styled-components';
import  Head  from '../Text/Header';
import Buttons from '../Buttons/Buttons';
import { useState } from 'react';

const MainCard = styled.div`
  margin: 0 auto;
  // padding: 20;
  width: 260px;
  height: 550px;
  background-color: #E5E5E5;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const PhotoCard = styled.img`
  width: 238px;
  height: 266px;
  border-radius: 16px;
`
const NameCard = styled.p`
  width: 238px;
  min-height: 118px;
  background-color: #FFFFFF;
  color: #4D4D4D;
  border-radius: 16px;
  padding: 12px;
  font-size: 11px;
  overflow: hidden;
`



export default function Bubble({
    img = 'http://www.placekitten.com/266',
    content = 'Coast Salish peoples inhabit the Northwest Coast of North America, from the mouth of the Columbia River in Oregon, north to Bute Inlet in British Columbia. Coast Salish territories includes much of the ecologically diverse Georgia Basin and Puget Sound known as the Salish Sea (right).',
    name = 'Community Name',
    theme = '' //set to 'light' for light text
}) {

  const [show, setShow] = useState(false);
  const handleShow = () => {setShow(true)};
  const handleHideShow = () => {setShow(false)};
  return (<>
    {
      show ? <MainCard> 
        <PhotoCard src={img} />
      </MainCard> : <MainCard>
      <PhotoCard src={img} />
      <Head light={theme} txt={name}/>
      <NameCard>{content}</NameCard>
      <Buttons onclick={() => handleShow()} txt='Learn More' />
    </MainCard>

    }
    </>
    )
}