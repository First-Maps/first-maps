import React from 'react'
import { Navbar as NavbarComponent } from '../components/Navbar/Navbar'

export default {
  title: 'Components/Navigation/Navbar',
  component: NavbarComponent,
  args: {}
}

const Template = (args) => <NavbarComponent {...args} />

export const NavbarHome = Template.bind({})
NavbarHome.args = {
  navPages: ["Home", "Explore", "Contribute", "Profile"],
  activePage: "Home",
}

export const NavbarExplore = Template.bind({})
NavbarExplore.args = {
  navPages: ["Home", "Explore", "Contribute", "Profile"],
  activePage: "Explore",
}

export const NavbarContribute = Template.bind({})
NavbarContribute.args = {
  navPages: ["Home", "Explore", "Contribute", "Profile"],
  activePage: "Contribute",
}

export const NavbarProfile = Template.bind({})
NavbarProfile.args = {
  navPages: ["Home", "Explore", "Contribute", "Profile"],
  activePage: "Profile",
}
