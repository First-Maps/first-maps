import Input from '../components/Input'

export default {
  title: 'Components/Input',
  component: Input,
}

const Template = (args) => <Input {...args} />

export const InputDefault = Template.bind({})
InputDefault.args = {
  placeholder: 'Enter text here...',
}
