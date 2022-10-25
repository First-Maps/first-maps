import  Styled  from "styled-components";

const Button  = Styled.button`
    min-width: 75px;
    min-height: 26px;
    padding: 0px 4px 0px 4px;
    border-radius: 17px;
    decoration: none;
    border: none;
    background-color: #333333;
    font-size: 11px;
`
const ButtonWrapper = Styled.div`
    display: flex;
    width: 238px;
    height: 26px;
    justify-content: flex-start;

`
export default function Buttons({
    onclick = () => {},
    txt = 'Button'
}) {


    return (
        <ButtonWrapper>
            <Button onClick={onclick}>{txt}</Button>
        </ ButtonWrapper>
    )
}