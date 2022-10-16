import React from 'react'

import { FilterToggleButton as FilterToggleButtonComponent } from '../components/FilterToggleButton/FilterToggleButton'

export default {
  title: 'Components/FilterToggleButton',
  component: FilterToggleButtonComponent,
  args: {},
}

export const FilterToggleButton = (args) => <FilterToggleButtonComponent {...args} />

FilterToggleButton.args = {
  label: 'Arts',
  selected: false
}
