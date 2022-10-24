import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  active: true,
  text: 'Start here',
}

export const Inactive = Template.bind({})
Inactive.args = {
  active: false,
  text: 'Start here',
}