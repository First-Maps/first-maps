import React from "react"
import { SearchGroup as SearchGroupComponent } from "../components/SearchGroup/SearchGroup"

export default {
  title: "Components/SearchGroup",
  component: SearchGroupComponent,
  args: {},
}

export const SearchGroup = (args) => <SearchGroupComponent {...args} />

SearchGroup.args = {
  filterToggles: [
    { key: 1, label: "Arts", selected: true },
    { key: 2, label: "Tourism", selected: false },
    { key: 3, label: "Language", selected: false },
  ]
}
