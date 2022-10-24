import ItemBox from "../components/ItemBox/ItemBox"

export default {
  title: "Components/ItemBox",
  component: ItemBox,
}

const Template = (args) => <ItemBox {...args} />

export const ItemBoxDefault = Template.bind({})
ItemBoxDefault.args = {
  image: "https://d3d0lqu00lnqvz.cloudfront.net/media/media/thumbnails/41a929c8-9efb-45c7-99a3-bf0ea227c3dd.jpg",
  title: "Native Language Here",
}