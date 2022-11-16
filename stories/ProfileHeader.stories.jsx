import ProfileHeader from '../components/ProfileHeader/ProfileHeader'

export default {
  title: 'Components/ProfileHeader',
  component: ProfileHeader,
}

const Template = (args) => <ProfileHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  profileName: "Ana Williams",
  profilePicture: "/profile-picture.png",
}