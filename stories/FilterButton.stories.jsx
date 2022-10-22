import React from 'react';

import { FilterButton as FilterButtonComponent } from '../components/Search/FilterButton';

export default {
  title: 'Components/Search/FilterButton',
  component: FilterButtonComponent,
  args: {
    pressed: false,
  },
}

const Template = (args) => <FilterButtonComponent {...args} />;

export const FilterButtonInactive = Template.bind({});
FilterButtonInactive.args = {
  pressed: false,
};

export const FilterButtonActive = Template.bind({});
FilterButtonActive.args = {
  pressed: true,
};
