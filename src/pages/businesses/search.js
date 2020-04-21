import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import StyledHeading from "../../components/global-styles/headings.js"
import Container from "../../components/global-styles/container"
import ContainerNarrowContent from "../../components/global-styles/container-narrow-content"

import Search from "../../components/search"

const SearchPage = ({ data }) => (
  <Layout>
    <SEO
      title="Search"
      description="Search for businesses open during COVID-19"
    />
    
    <Container>
      <ContainerNarrowContent>
        <StyledHeading>Search</StyledHeading>
        <p>To find a business that is still open during COVID-19, search by business name, address, service, postcode, phone number, or keyword.</p>
      </ContainerNarrowContent>
      
      <Search searchIndex={data.siteSearchIndex.index} />
      
    </Container>

  </Layout>
)

export default SearchPage

export const SearchPageQuery = graphql`
  {
    siteSearchIndex {
      index
    }
  }
`