// import { Navbar } from '../../Navbar/Navbar'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import ItemBox from '../../components/ItemBox/ItemBox'
import VideoPlayer from '../../components/VideoPlayer'
import Bodytext from '../../components/BodyText/Bodytext'
import MiniButton from '../../components/MiniButton'
import { Navbar } from '../../components/Navbar/Navbar'
import {useRouter} from "next/router"
import router from 'next/router'

const StyledContainer = styled.div`
  max-height: calc(100vh - 60px - 58px);
  min-height: calc(100vh - 60px - 58px);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;
  @media (min-width: 768px) {
    min-height: 100vh;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
  }
`

export default function WhatIsFirstMaps({
    // ...props
    // onClick=()=>{},
}) {
    return (
        <div>  
            <StyledContainer>
            <Header
                    label='What is First Maps?'
                    text='↽ Back to FAQ'
                    dir="column-reverse"
                    ali="flex-start"
                    padl="0"  
                    onClick={() => router.push('/FAQ')}
                />
                {/* <div> 
                  <a href="https://imgbox.com/78cKWPhj" target="_blank"><img src="https://images2.imgbox.com/1f/e5/78cKWPhj_o.png" alt='image host' width="320" height="220"/></a>
                </div> */}
                
                <h3>Intro</h3>
                <Bodytext
                  label='First Maps serves an interactive resource for indigenous community members and the general public to establish and strengthen connections in the spheres of culture, art and tourism. Addressing painpoints from indigenous community members, First Maps serves as a singular place to connect areas across British Columbia!'
                />
                <br/>
                <h3>Our Goal</h3>
                 <Bodytext
                  label='To create a safe inclusive space to preserve history, help communities connect, learn languages, history and help people support indigenous community businesses. First Maps contribution feature allows the community to adjust First Maps to their own needs.'
                />

              {/* <MiniButton text = "Go Back" onClick={() => router.push('../FAQ')}/> */}

            </StyledContainer>

            <Navbar
            navPages={['Home', 'Explore', 'Contribute', 'Profile']}
            activePage={'Profile'}
            />
        </div>
    )
}