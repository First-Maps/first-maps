import styled from "styled-components"
import Link from "next/link"
import Button from "../Button"
import { Settings } from "react-feather"

const StyledProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E5E5;
  padding: 0.75em;
  border-radius: 1em;

  @media (prefers-color-scheme: dark) {
    background-color: #2B2A33;
    border-bottom: 1px solid #2F2F2F;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }
`

const ProfileHeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-width: 100%;
`

const ProfileHeaderBottom = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  max-width: 100%;
  padding: 0 0.5em;
`

const ProfileHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-right: 1em;
  max-width: calc(100% - 140px);
  
  @media (prefers-color-scheme: dark) {
    color: #FFFFFF;
  }
`

const ProfileHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  
  @media (prefers-color-scheme: dark) {
    color: #FFFFFF;
  }
`

const ProfileNameText = styled.div`
  font-weight: 600;
  font-size: 1.25em;
  max-width: 170px;
  overflow-wrap: break-word;
  max-width: 100%;
  @media (min-width: 768px) {
    
  }
`

const ProfilePicture = styled.div`
  min-width: 120px;
  min-height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${props => props.picture});
  background-size: cover;
`

export default function ProfileHeader({
  profilePicture,
  profileName,
}) {
  return (
    <StyledProfileHeader>
      <ProfileHeaderTop>
        <Link 
          href="/settings"
        >
          <Settings
            style={{
              cursor: "pointer",
            }} />
        </Link>
      </ProfileHeaderTop>
      <ProfileHeaderBottom>
        <ProfileHeaderLeft>
          <ProfileNameText>
            {profileName}
          </ProfileNameText>
        </ProfileHeaderLeft>
        <ProfileHeaderRight>
          <ProfilePicture
            picture={profilePicture}
          />
        </ProfileHeaderRight>
      </ProfileHeaderBottom>
      
    </StyledProfileHeader>
  )
}