import LoginButton from '../components/LoginButton/LoginButton'

export default {
  title: 'Components/LoginButton/LoginButton',
  component: LoginButton,
}

const Template = (args) => <LoginButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  active: true,
  color: "#4285F4",
  text: "Login with Google",
  logo: "/google-logo.png",
}

export const Inactive = Template.bind({})
Inactive.args = {
  active: false,
  color: "#555555",
  text: "Login with Google",
  logo: "/google-logo.png",
}