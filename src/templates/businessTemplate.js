import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { css } from "styled-components"
import StyledHeading from "../components/global-styles/headings.js"
import Container from "../components/global-styles/container"
import ContainerWide from "../components/global-styles/container-wide"

const BusinessHeader = styled.div`
  border-left: 3px solid var(--secondary);
  padding-left: 2rem;
  h1 {
    margin-bottom: 1rem;
  }
`

export default function EventTemplate({data}) {
  
  const { googleSpreadsheetBusinessAsUsualResponsesFormResponses1 } = data
  const dataItem = googleSpreadsheetBusinessAsUsualResponsesFormResponses1
  return (
    <Layout>
      
      <SEO 
        title={`${dataItem.businessName} in ${dataItem.county}`}
        description={`${dataItem.businessName} in ${dataItem.county} is still operating during the COVID-19 Crisis.`}
      />

        
      <article>
        <Container>
          <BusinessHeader>
            <StyledHeading>{dataItem.businessName}</StyledHeading>    
            <br></br>{dataItem.address}
            <br></br>{dataItem.county}
          </BusinessHeader>
        </Container>
        
        <ContainerWide>
          <Container paddingLeft>
            
            <p>{dataItem.canYouFulfillOrdersForPeopleAndHaveThemDelivered_}</p>
            
            <p>{dataItem.doYouHaveAnOnlineStore_}</p>
            <p>{dataItem.emailAddress}</p>
            <p>{dataItem.hasYourBusinessChangedSinceCovid19_}</p>
            <p>{dataItem.phoneNumber}</p>
            <p>{dataItem.postcode}</p>
            <p>{dataItem.provideAShortDescriptionOfYourBusiness}</p>
            <p>{dataItem.website}</p>
            <p>{dataItem.whatAreYourOpeningHours_}</p>
            <p>{dataItem.whatServicesDoYouProvide_}</p>   

            <Link to="/businesses/">All Businesses</Link>
          </Container>
        </ContainerWide>
      </article>
        
      
    </Layout>
  )
}

export const BusinessPageQuery = graphql`
  query($slug: String!) {
    googleSpreadsheetBusinessAsUsualResponsesFormResponses1(fields: { slug: { eq: $slug } }) {
      businessName
      address
      canYouFulfillOrdersForPeopleAndHaveThemDelivered_
      county
      doYouHaveAnOnlineStore_
      emailAddress
      hasYourBusinessChangedSinceCovid19_
      phoneNumber
      postcode
      provideAShortDescriptionOfYourBusiness
      website
      whatAreYourOpeningHours_
      whatServicesDoYouProvide_
    }
  }
`