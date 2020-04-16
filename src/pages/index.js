import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeading from "../components/global-styles/headings.js"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <StyledHeading>Business As Usual</StyledHeading>
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