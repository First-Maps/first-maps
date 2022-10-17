import React from 'react'

import { FilterToggleButton as FilterToggleButtonComponent } from '../components/Search/FilterToggleButton'

export default {
  title: 'Components/Search/FilterToggleButton',
  component: FilterToggleButtonComponent,
  args: {},
}

export const FilterToggleButton = (args) => <FilterToggleButtonComponent {...args} />

FilterToggleButton.args = {
  label: 'Arts',
  selected: false
}
