import styled from "styled-components"

import Button from "../Button"
import { Settings } from "react-feather"


const StyledProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E5E5;

  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
    border-bottom: 1px solid #2F2F2F;
  }
`

const ProfileHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  
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
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 0.5em 0;
`

const ProfilePicture = styled.img`
  width: 133px;
  height: 133px;
  border-radius: 50%;
  overflow: hidden;
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
        <Button
          active={true}
          text="Edit Profile"
          small={true}
          arrow={false}
          onClick={() => {}}
        />
      </ProfileHeaderLeft>
      <ProfileHeaderRight>
        <Settings
          style={{
            margin: "0 0 2em 0",
            cursor: "pointer",
          }} />
        <ProfilePicture
          src={profilePicture}
        />
      </ProfileHeaderRight>
    </StyledProfileHeader>
  )
}