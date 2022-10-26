import ContributeForm from "../components/ContributeForm"

export default {
  title: "Components/ContributeForm",
  component: ContributeForm,
}

const Template = (args) => <ContributeForm {...args} />

export const ContributeFormDefault = Template.bind({})
ContributeFormDefault.args = {}