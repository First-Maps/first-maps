import React from 'react';

import { Home as HomeIcon, Compass, Donate, User } from "iconoir-react"

import { NavItem } from '../components/Navbar/NavItem'

export default {
  title: 'Components/Navigation/NavItem',
  component: NavItem,
  args: {},
}

const Template = (args) => <NavItem {...args} />

export const Home = Template.bind({})
Home.args = {
  label: 'Home',
  active: true,
  children: <HomeIcon height="2em" width="2em" />
}

export const Explore = Template.bind({})
Explore.args = {
  label: 'Explore',
  active: false,
  children: <Compass height="2em" width="2em" />
}

export const Contribute = Template.bind({})
Contribute.args = {
  label: 'Contribute',
  active: false,
  children: <Donate height="2em" width="2em" />
}

export const Profile = Template.bind({})
Profile.args = {
  label: 'Profile',
  active: false,
  children: <User height="2em" width="2em" />
}
