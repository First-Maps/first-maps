// import { Navbar } from '../../Navbar/Navbar'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import ItemBox from '../../components/ItemBox/ItemBox'
import VideoPlayer from '../../components/VideoPlayer'
import Bodytext from '../../components/BodyText/Bodytext'
import MiniButton from '../../components/MiniButton'
import { Navbar } from '../../components/Navbar/Navbar'
import {useRouter} from "next/router";
import router from 'next/router';

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

export default function HowToContribute({
    // ...props
    // onClick=()=>{},
}) {
    return (
        <div>  
            <StyledContainer>
            <Header
                    label='What are Contribute?'
                    text='↽ Back to FAQ'
                    dir="column-reverse"
                    ali="flex-start"
                    padl="0"  
                    onClick={() => router.push('/FAQ')}
                />
                {/* <div> 
                  <a href="https://imgbox.com/78cKWPhj" target="_blank"><img src="https://images2.imgbox.com/1f/e5/78cKWPhj_o.png" alt='image host' width="320" height="220"/></a>
                </div> */}
                
                <h3>Definition</h3>
                <Bodytext
                  label='You can help other communities by contributing cultural, art, business or accurate language translations of First Nation languages, particularly Basic, by filling out a form located on the Contribute page.'
                />
                <br/>
                <h3>Purpose</h3>
                 <Bodytext
                  label='Not only does it help indigenous communities through preservation of history, but makes it more accessible for classes to teach languages. Contributing can also help indigenous businesses find a welcoming audience to sell to.'
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