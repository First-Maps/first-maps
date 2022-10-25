import { motion } from "framer-motion";
import { useRef, useEffect, useState,} from "react";
import styled from "styled-components";
import CarouselItems from "./CarouselItems";


export default function Carousel(){

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);
    
    console.log(CarouselItems)
    return (
    <Box>
        <OuterCarousel
        ref = {carousel}
        >
            <InnerCarousel 
            drag='x'
            dragConstraints={{right:0, left: - width}}
            >
            {CarouselItems.map(CarouselItems =>{
                return(
                    <Item>
                        <CarouselItems
                        key={CarouselItems}
                        label='Western Albenaki (Ojibwe)'
                        />
                    </Item>
                )
            })}
            </InnerCarousel>
        </OuterCarousel>
    </Box>
    )
}

const OuterCarousel = styled(motion.div)`
overflow: hidden;
curser: grab;
// background-color: pink;
`;

const InnerCarousel = styled(motion.div)`
display: flex;
flex-direction: horizantal;
// background-color: lightblue;
flex-wrap: nowrap;
`;

const Item = styled(motion.div)`
padding: 10px;
padding-top: 30px; 
padding-bottom: 30px; 
`;

const Box = styled.div`
// margin:0 20%;
`;