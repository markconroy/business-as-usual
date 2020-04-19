import React, { Fragment } from "react"
import _ from 'lodash'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import GridContainer from "../components/global-styles/grid-container.js"
import GridItem from "../components/global-styles/grid-item.js"
import Container from "../components/global-styles/container"
import StyledHeading from "../components/global-styles/headings"

const CountyPage = ({ data }) => (

  <Layout>
    <SEO 
      title="Business Trading During COVID-19"
      description="These businesses are continuing to trade through the COVID-19/Coronavirus crisis. Please support them. "
    />
    
    <Container>
      
      <StyledHeading>Business As Usual</StyledHeading>  
      <h2>Currently there are {data.allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1.totalCount} open businesses in {data.allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1.edges[0].node.county}</h2>
      <GridContainer>
        {data.allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1.edges.map(edge => (    
          <Fragment>
            <GridItem>
              <Card 
                cardPath = {`/businesses/${_.kebabCase(edge.node.county)}/${_.kebabCase(edge.node.businessName)}`}
                cardTitle = {edge.node.businessName}
                cardAddress = {edge.node.address}
                cardCounty = {edge.node.county}
                cardLinkText = {`Read More`}
              />
            </GridItem>
          </Fragment>
        ))}
      </GridContainer>

    </Container>
  </Layout>
)

export default CountyPage

export const CountyPageQuery = graphql`
query($county: String){
    allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1(filter: {county: {eq: $county}}, sort: {order: ASC, fields: businessName}) {
      edges {
        node {
          county
          businessName
          address
        }
      }
      totalCount
    }
  }
`