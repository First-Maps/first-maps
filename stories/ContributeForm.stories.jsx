import ContributeForm from "../components/Contribute/ContributeForm"

export default {
  title: "Components/ContributeForm",
  component: ContributeForm,
}

const Template = (args) => <ContributeForm {...args} />

export const ContributeFormDefault = Template.bind({})
ContributeFormDefault.args = {}