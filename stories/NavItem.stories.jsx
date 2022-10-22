import React from 'react';

import { NavItem } from '../components/Navbar/NavItem'

export default {
  title: 'Components/Navigation/NavItem',
  component: NavItem,
  args: {},
}

const Template = (args) => <NavItem {...args} />

export const HomeActive = Template.bind({})
HomeActive.args = {
  label: 'Home',
  active: true,
}

export const HomeInactive = Template.bind({})
HomeInactive.args = {
  label: 'Home',
  active: false,
}

export const ExploreActive = Template.bind({})
ExploreActive.args = {
  label: 'Explore',
  active: true,
}

export const ExploreInactive = Template.bind({})
ExploreInactive.args = {
  label: 'Explore',
  active: false,
}

export const ContributeActive = Template.bind({})
ContributeActive.args = {
  label: 'Contribute',
  active: true,
}

export const ContributeInactive = Template.bind({})
ContributeInactive.args = {
  label: 'Contribute',
  active: false,
}

export const ProfileActive = Template.bind({})
ProfileActive.args = {
  label: 'Profile',
  active: true,
}

export const ProfileInactive = Template.bind({})
ProfileInactive.args = {
  label: 'Profile',
  active: false,
}
