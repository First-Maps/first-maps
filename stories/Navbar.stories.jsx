import React from 'react'

import { Navbar as NavbarComponent } from '../components/Navbar/Navbar'

import { NavItem } from '../components/Navbar/NavItem'

import { Home, Compass, Donate, User } from 'iconoir-react'

export default {
  title: 'Components/Navigation/Navbar',
  component: NavbarComponent,
  args: {},
}

export const Navbar = (args) => <NavbarComponent {...args} />
Navbar.args = {}
