import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const BusinessPage = ({ data }) => (
  <Layout>
    <SEO title="Business" />
    <h1>Business As Usual</h1>
    {data.allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1.edges.map(edge => (
      <Fragment>
        <Card 
          cardTitle = {edge.node.businessName}
        />
      </Fragment>
    ))}

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
        }
      }
    }
  }
`