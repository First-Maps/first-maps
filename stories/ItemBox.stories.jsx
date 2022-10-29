import React from 'react';
import ItemBox from '../components/ItemBox/ItemBox'

export default {
  title: 'Components/ItemBox/ItemBox',
  component: ItemBox,
  args: {},
}

const Template = (args) => <ItemBox {...args}/>

export const Item = Template.bind({})
Item.args = {
  label:'Western Albenaki (Ojibwe)',
}

export const ItemWide = Template.bind({})
ItemWide.args = {
  label:'test',
  width: "331.67px",
  height: "230px"
}

export const ItemSkinny = Template.bind({})
ItemSkinny.args = {
  label:'test',
  width: "331.67px",
  height: "75px"
}

// old code no args: 
    // export const Item = () => <ItemBox />

    // export const ItemMain = Item.bind({})
    // ItemMain.args = {
    //     width="55px",
    //     height="55px"
    // }

    // export const ItemWide = () => <ItemBox 
    // width="331.67px" 
    // height="230px"
    // />

    // export const ItemSkinny = () => <ItemBox
    // width="331.67px" 
    // height="75px"
    // />
