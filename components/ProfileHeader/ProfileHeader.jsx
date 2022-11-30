import styled from "styled-components"
import Link from "next/link"
import Button from "../Button"
import { Settings } from "react-feather"

const StyledProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 250px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E5E5;
  z-index:3;

  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
    border-bottom: 1px solid #2F2F2F;
    z-index:3;
  }
`

const ProfileHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  z-index:3;
  
  @media (prefers-color-scheme: dark) {
    color: #FFFFFF;
    z-index:3;
  }
`

const ProfileHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  z-index:3;
  
  @media (prefers-color-scheme: dark) {
    color: #FFFFFF;
    z-index:3;
  }
`

const ProfileNameText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 0.5em 0;
  z-index:3;
`

const ProfilePicture = styled.img`
  width: 133px;
  height: 133px;
  border-radius: 50%;
  overflow: hidden;
  z-index:3;
`

export default function ProfileHeader({
  profilePicture,
  profileName,
}) {
  return (
    <StyledProfileHeader>
      <ProfileHeaderLeft>
        <ProfileNameText>
          {profileName}
        </ProfileNameText>
      </ProfileHeaderLeft>
      <ProfileHeaderRight>
        <Link 
          href="/settings"
        >
          <Settings
            style={{
              margin: "0 0 2em 0",
              cursor: "pointer",
            }} />
        </Link>
        <ProfilePicture
          src={profilePicture}
        />
      </ProfileHeaderRight>
    </StyledProfileHeader>
  )
}