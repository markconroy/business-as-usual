import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import StyledHeading from "../../components/global-styles/headings.js"

const ServicesPage = ({ data: {
  allMarkdownRemark: { group } }, }) => (
  <Layout>

    <SEO 
      title="Services by Service Type"
      description = {`View all ${allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1.group.fieldValue}`}
    />

    <StyledHeading h1>Services by Type</StyledHeading>

    <ul>
      {group.map(service => (
        <li key={service.fieldValue}>
          <Link to={`/cities/${kebabCase(service.fieldValue)}/`}>
            {service.fieldValue} ({service.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

ServicesPage.propTypes = {
  data: PropTypes.shape({
    allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default ServicesPage

export const ServicesPageQuery = graphql`
  query {
    allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1 {
      group(field: yourServices) {
        fieldValue
        totalCount
      }
    }
  }
`