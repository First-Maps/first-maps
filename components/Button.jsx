import styled from "styled-components"

import { NavArrowRight } from "iconoir-react"

const MyButton = styled.button`
  box-sizing: border-box;
  border-radius: 2em;
  margin: 1em 0;
  padding: 1em;
  border: 0;
  background-image: linear-gradient(to right, #F8893C 0%, #FF5929 100%);
  min-width: 100%;
  color: white;
`

const ButtonText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

export default function Button({
  text,
  onClick
}) {
  return (
    <MyButton>
      <ButtonText>
        <div>
          {text}
        </div>

        &nbsp;&nbsp;

        <NavArrowRight iconProps={{
          width: '2em',
          height: '2em'
        }} />
      </ButtonText>
    </MyButton>
  )
}