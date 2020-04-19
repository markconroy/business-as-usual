/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `GoogleSpreadsheetBusinessAsUsualResponsesFormResponses1`) {
    const slug = `businesses/${node.county ? `${_.kebabCase(node.county)}/` : ""}${_.kebabCase(node.businessName)}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const businessPageTemplate = path.resolve(`src/templates/businessTemplate.js`)
  const countiesPageTemplate = path.resolve(`src/pages/counties.js`)
  const countyPageTemplate = path.resolve(`src/pages/county.js`)
  const result = await graphql(`
    {
      businessSheet: allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1(sort: {fields: businessName, order: ASC}) {
        edges {
          node {
            businessName
            county
            fields {
              slug
            }
          }
        }
      }
      countyList:  allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1 {
        group(field: county) {
          fieldValue 
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const businesses = result.data.businessSheet.edges
  businesses.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: businessPageTemplate,
      context: {
        slug: node.fields.slug
      },
    })
  })

  const counties = result.data.businessSheet.edges
  counties.forEach(({ node }) => {
    createPage({
      path: `/businesses/${_.kebabCase(node.county)}`,
      component: countiesPageTemplate,
      context: {
        slug: `/businesses/${_.kebabCase(node.county)}`
      },
    })
  })

  const county = result.data.countyList.group
  county.forEach(node => {
    createPage({
      path: `/businesses/${_.kebabCase(node.fieldValue)}`,
      component: countyPageTemplate,
      context: {
        county: node.fieldValue,
        countyValue: node.county
      },
    })
  })

}
