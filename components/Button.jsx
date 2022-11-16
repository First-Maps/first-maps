import styled from "styled-components"

import { NavArrowRight } from "iconoir-react"

const MyButton = styled.button`
  box-sizing: border-box;
  border-radius: 2em;
  margin: 1em 0;
  padding: ${props => props.small ? "0.75em 1em" : "1em 2em"};
  border: 0;
  background-image: ${props => props.active ? "linear-gradient(to right, #F8893C 0%, #FF5929 100%)" : "linear-gradient(to right, #878787 0%, #333 100%)"};
  min-width: ${props => props.small ? "6em" : "100%"};
  color: white;
`

const ButtonText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default function Button({
  active = true,
  text,
  small = false,
  arrow = true,
  onClick
}) {
  return (
    <MyButton active={active} small={small} onClick={onClick} >
      <ButtonText>
        <div>
          {text}
        </div>

        {arrow && <span>&nbsp;&nbsp;</span>}

        {arrow && <NavArrowRight  />}
      </ButtonText>
    </MyButton>
  )
}