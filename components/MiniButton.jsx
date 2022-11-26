import styled from "styled-components"
import { NavArrowRight } from "iconoir-react"
const MyButton = styled.button`
  box-sizing: border-box;
  border-radius: 2em;
  margin: 1em 0;
  padding: 1em;
  border: 0;
  background-image: ${props => props.active ? "linear-gradient(to right, #F8893C 0%, #FF5929 100%)" : "linear-gradient(to right, #878787 0%, #333 100%)"};
  min-width: 100%;
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
  onClick
}) {
  return (
    <MyButton active={active} onClick={onClick} >
      <ButtonText>
        <div>
          {text}
        </div>
        &nbsp;&nbsp;
      </ButtonText>
    </MyButton>
  )
}