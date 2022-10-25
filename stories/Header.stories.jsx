import React from 'react';
import Header from '../components/Header/Header';

export default {
    title: 'Components/Header/Header',
    component: Header,
    args: {},
}

const Template = (args) => <Header {...args}/>

export const HeaderLang = Template.bind({})
HeaderLang.args = {
  label:'Languages',
  text:'see all ➤'
}

export const HeaderArt = Template.bind({})
HeaderArt.args = {
  label:'Arts and Culture',
  text:'see all ➤'
}

export const LanguageHeader = Template.bind({})
LanguageHeader.args = {
  label:'Western Albenaki (Algonquin)',
  text:'↽ Back to Explore',
  dir:'column'
}