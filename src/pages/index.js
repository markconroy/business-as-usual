import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Business As Usual</h1>
    <p>A listing of businesses that are still operating through the COVID-19 Crisis in Ireland and Northern Ireland.</p>
    <p>In the meantime, to be included in this new directory, please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform">fill in this form</a>.</p>
  </Layout>
)

export default IndexPage

export const IndexPageQuery = graphql`
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