import React from "react"
import { Search as SearchComponent } from "../components/Search/Search"

export default {
  title: "Components/Search/Search",
  component: SearchComponent,
}

export const Search = (args) => <SearchComponent {...args} />

Search.args = {
  placeholder: "Search"
}
