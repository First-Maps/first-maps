import styled from 'styled-components'
import Head, {Sub} from '../Text/Header'
import Buttons from '../Buttons/Buttons'
import ItemBox from '../ItemBox/ItemBox'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useRouter } from 'next/router'


const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #E5E5E5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const Logo = styled.img`
  width: 18em;
  height: 16em;
  margin-top: 12em;
`

const SplashDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: 
  linear-gradient(360deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,0) 100%),
  url(${props => props.img});
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

`
const TextDiv = styled.div`
  width: 20em;
  justify-content: center;
  margin-bottom: 25em;
`

const BeginHead = styled(Head)`
  max-width: 234;
  min-height: 92;
`

const SelectWrap = styled.div`
  width: 20em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  
  `
const SelectAll = styled.div`
background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function Splash(){


  return <Body>
    <Logo src='../splash_logo.svg'/>

  </Body>
}

export const Begin = ({
  onClick = () => {}
}) => {

  return <SplashDiv img='../totempole.jpeg'>
    <TextDiv>

    <BeginHead txt='Welcome to First Maps!'/>
    <Sub light txt={'FirstMaps is an interactive resource for indigenous community members and the general public to establish and strengthen connections in the spheres of culture, art and tourism.'}/>
    <Buttons txt='Begin' onclick={onClick}/>

    </TextDiv>

  </SplashDiv>

}

export const Select = ({
})  => {
  
  const types = [
    {
      category: 'Culture',
      img: '../option_3.png'
    },
    {
      category: 'Arts',
      img: '../option_1.png'

    },
    {
      category: 'Language',
      img: '../option_2.png'
    },
    {
      category: 'History',
      img: '../option_4.png'
    },
  ]

  const [item, selectItem] = useLocalStorage('item',{
    Culture : false,
    Arts : false,
    Language : false,
    History : false,
  })


  const itemHandle = (types) => {
    console.log(item)
    selectItem({
      ...item,
      [types] : !item[types]
    })
  }

  const r = useRouter()

  return <>
    <SelectAll>

      <Head light='' txt='What Interests You Today?'/>


      <SelectWrap>
        {types.map((e, i) =>{
          return (
              <ItemBox label={e.category} key={e.category} width='137px' height='137px' img={e.img} onClick={() => itemHandle(e.category)}/>    

              
              )
              
            })}
      </SelectWrap>
      <Buttons txt='Continue' onclick={() => r.push('/')}/>

    </SelectAll>
  </>
}
