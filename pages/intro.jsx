import Splash, {Begin, Select} from "../components/IntroSplash"
import { useState, useEffect } from "react"
import { Router } from "next/router"

export default function Intro(){
  
  const component = [
    <Splash />,
    <Begin onClick={() => {setComps(2)}} />,
    <Select onClick={(name) => handleClick(name)}/>
  ]


  const [comps, setComps] = useState(0)

  useEffect(() =>{
    const timer = setTimeout(() => {
      setComps(1)
      console.log('Changed in 2 Seconds')
    }, 2000)
  },[])

  return (<>
    {component[comps]}
  </>)
  
  
}