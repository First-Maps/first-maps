import React from 'react';

import { FilterButton as FilterButtonComponent } from '../components/Search/FilterButton';

export default {
  title: 'Components/Search/FilterButton',
  component: FilterButtonComponent,
  args: {},
}

export const FilterButton = (args) => <FilterButtonComponent {...args} />;

FilterButton.args = {};
