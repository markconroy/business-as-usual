import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import GridContainer from "../components/global-styles/grid-container.js"
import GridItem from "../components/global-styles/grid-item.js"
import Container from "../components/global-styles/container"

const BusinessPage = ({ data }) => (
  <Layout>
    <SEO 
      title="Business Trading During COVID-19"
      description="These businesses are continuing to trade through the COVID-19/Coronavirus crisis. Please support them. "
    />
    
    <Container>

      <h1>Business As Usual</h1>  

      <GridContainer>
        {data.allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1.edges.map(edge => (
          <Fragment>
            <GridItem>
              <Card 
                cardPath = {edge.node.fields.slug}
                cardTitle = {edge.node.businessName}
                cardAddress1 = {edge.node.cardAddress1}
                cardAddress2 = {edge.node.cardAddress2}
                cardTown = {edge.node.town}
                cardCounty = {edge.node.county}
              />
            </GridItem>
          </Fragment>
        ))}
      </GridContainer>

    </Container>
  </Layout>
)

export default BusinessPage

export const BusinessPageQuery = graphql`
  {
    allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1 {
      edges {
        node {
          addressLine1
          businessName
          county
          doYouHaveAnOnlineStore_
          postcode
          emailAddress
          hasYouBusinessChangedSinceCovid19_
          phoneNumber_
          provideAShortDescriptionOfYourBusiness
          timestamp
          town
          website
          whatAreYourOpeningHours_
          whatServicesDoYouProvide_
          fields {
            slug
          }
        }
      }
    }
  }
`