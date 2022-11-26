import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components"


// styled components to style the skeleton

const StyledSkeleton = styled(Skeleton)`
  margin-left: 1rem;
`


export default function SkeletonCarousel(){
    return (
        <>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
          <Skeleton height={230} width={330} borderRadius="1rem"/>
        </>
    )
}