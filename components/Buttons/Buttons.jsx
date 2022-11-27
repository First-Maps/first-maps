import  Styled  from "styled-components";

const Button  = Styled.button`
    width: 6em;
    height: 2em;
    background-image: linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%);
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    border-radius: 25px;
    display: block;
    border: none;

    &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    }
`
const ButtonWrapper = Styled.div`
    display: flex;
    width: 238px;
    height: 26px;
    justify-content: center;

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