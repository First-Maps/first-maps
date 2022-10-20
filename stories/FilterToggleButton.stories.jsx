import React from 'react'

import { FilterToggleButton as FilterToggleButtonComponent } from '../components/Search/FilterToggleButton'

export default {
  title: 'Components/Search/FilterToggleButton',
  component: FilterToggleButtonComponent,
  args: {},
}

const Template = (args) => <FilterToggleButtonComponent {...args} />

export const FilterToggleButtonArtsInactive = Template.bind({})
FilterToggleButtonArtsInactive.args = {
  label: 'Arts',
  selected: false
}

export const FilterToggleButtonArtsActive = Template.bind({})
FilterToggleButtonArtsActive.args = {
  label: 'Arts',
  selected: true
}

export const FilterToggleButtonLanguagesInactive = Template.bind({})
FilterToggleButtonLanguagesInactive.args = {
  label: 'Languages',
  selected: false
}

export const FilterToggleButtonLanguagesActive = Template.bind({})
FilterToggleButtonLanguagesActive.args = {
  label: 'Languages',
  selected: true
}

export const FilterToggleButtonTourismInactive = Template.bind({})
FilterToggleButtonTourismInactive.args = {
  label: 'Tourism',
  selected: false
}

export const FilterToggleButtonTourismActive = Template.bind({})
FilterToggleButtonTourismActive.args = {
  label: 'Tourism',
  selected: true
}
