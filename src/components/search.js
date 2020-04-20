import React, { Component } from "react"
import { Index } from "elasticlunr"
import styled from "styled-components"
import GridContainer from "./global-styles/grid-container"
import GridItem from "./global-styles/grid-item"
import Card from "./card"


const SearchLabel = styled.label`
  display: block;
  margin-bottom: .25rem;
`

const SearchInput = styled.input`
  border: 2px solid var(--primary-dark);
  padding: .5rem 1rem;
  font-size: 1rem;
  transition: .4s;
  &:focus {
    box-shadow: inset .5rem 0px 0px 0px var(--primary-dark);
  }
`

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <SearchLabel for="search"><strong>Search by name, service, or keyword</strong></SearchLabel>
        <SearchInput id="search" type="text" value={this.state.query} onChange={this.search} placeholder="Search by name, service, or keyword" />
        <GridContainer>
          {this.state.results.map(page => (
            <GridItem key={page.id}>
              <Card
                cardPath = {page.path}
                cardTitle = {page.name}
                cardAddress = {page.address}
                cardCounty = {page.county}
                cardLinkText = {`Read More`}
              />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}