import React, { Fragment } from "react"
import _ from 'lodash'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Card from "../../components/card"
import GridContainer from "../../components/global-styles/grid-container.js"
import GridItem from "../../components/global-styles/grid-item.js"
import Container from "../../components/global-styles/container"
import StyledHeading from "../../components/global-styles/headings"

const CountyPage = ({ data }) => (
  <Layout>
    <SEO 
      title="Business Trading During COVID-19"
      description="These businesses are continuing to trade through the COVID-19/Coronavirus crisis. Please support them. "
    />
    
    <Container>

      <StyledHeading>Business As Usual</StyledHeading>  

      <GridContainer>
        {data.allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1.group.map(edge => (
            
          <Fragment>
            <GridItem>
              <Card 
                cardTitle = {`${edge.fieldValue} (${edge.totalCount}) `}
                cardLinkText = { `View Open Businesses`}
                cardPath = {`businesses/${_.kebabCase(edge.fieldValue)}`}
              />
            </GridItem>
          </Fragment>
        ))}
      </GridContainer>

    </Container>
  </Layout>
)

export default CountyPage

export const CountiesPageQuery = graphql`
{
    allGoogleSpreadsheetBusinessAsUsualResponsesFormResponses1 {
      group(field: county) {
        fieldValue
        totalCount
      }
    }
  }
  
`