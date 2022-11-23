import styled from "styled-components"
import { NavArrowRight } from "iconoir-react"

const IntroImageContainer = styled.button`
    height: 120%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    z-index: 0;
`
export default function IntroImage({
// ...
}) {
  return (
    <IntroImageContainer>
        <img src="intro.png" alt="First Nation Building" height="990px" width="450px"/>
    </IntroImageContainer>
  )
}
 

