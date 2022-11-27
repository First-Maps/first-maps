import styled from 'styled-components'
import  Head  from '../Text/Header'
import Buttons from '../Buttons/Buttons'
import { useState } from 'react'

const MainCard = styled.div`
  margin: 0 auto;
  // padding: 20;
  width: 260px;
  height: 550px;
  background-color: #333333;
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
    img = 'https://i.pinimg.com/originals/c8/c2/ba/c8c2baff7972c012360cfb5943f1020a.jpg',
    content = 'Tell Me About Yourself',
    name = 'Community Name',
    theme = '' //set to 'light' for light text
}) {

  const [show, setShow] = useState(false)
  const handleShow = () => {setShow(true)}
  const handleHideShow = () => {setShow(false)}
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