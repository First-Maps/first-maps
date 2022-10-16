import React from 'react';

import { FilterButton as FilterButtonComponent } from '../components/FilterButton/FilterButton';

export default {
  title: 'Components/FilterButton',
  component: FilterButtonComponent,
  args: {},
}

export const FilterButton = (args) => <FilterButtonComponent {...args} />;

FilterButton.args = {};
