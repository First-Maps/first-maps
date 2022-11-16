import styled from "styled-components"

const StyledLoginButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 2em;
  margin: 0.5em 0;
  padding: 1em 2em;
  border: 0;
  background-color: ${props => props.color};
  min-width: 320px;
  color: white;
  max-width: 320px;
`

const ButtonText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const LoginButtonlogo = styled.span`
  display: flex;  
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default function LoginButton({
  active = true,
  text,
  logo,
  onClick,
  color,
}) {
  return (
    <StyledLoginButton active={active} onClick={onClick} color={color}>
      <LoginButtonlogo
        src={logo}
      />
      <ButtonText>
        {text}
      </ButtonText>
    </StyledLoginButton>
  )
}