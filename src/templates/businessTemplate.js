import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { css } from "styled-components"
import StyledHeading from "../components/global-styles/headings.js"
import Container from "../components/global-styles/container"
import ContainerWide from "../components/global-styles/container-wide"

const BusinessHeader = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  border-left: 3px solid var(--secondary);
  h1 {
    margin-bottom: 0;
  }
  h1 ~ br {
    margin-bottom: .25rem;
  }
`

const BusinessDetails = styled.div`
  h2 {
    margin-bottom: .5rem;
  }
  h2 ~ h2 {
    margin-top: 3rem;
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
            {dataItem.address ? dataItem.address : ""}
            
            {dataItem.county ? 
              <Fragment><br></br>{dataItem.county}</Fragment>
            : ""}
            
            {dataItem.emailAddress ? 
              <Fragment>
                <br></br><a href={`mailto:${dataItem.emailAddress}`}>Email Us</a>
              </Fragment>
            : ""}
            
            {dataItem.website ? 
              <Fragment>    
                <br></br><a href={dataItem.website}>Visit Our Website</a>
              </Fragment>
            : ""}
          </BusinessHeader>
        </Container>
        
        <ContainerWide>
          <Container paddingAll>
            <BusinessDetails>
              {dataItem.provideAShortDescriptionOfYourBusiness ? 
                <Fragment>
                  <StyledHeading as="h2" className="h3">About Us</StyledHeading> 
                  <p>{dataItem.provideAShortDescriptionOfYourBusiness}</p>
                </Fragment>
              : ""}

              {dataItem.whatServicesDoYouProvide_ ? 
                <Fragment>
                  <StyledHeading as="h2" className="h3">Our Services</StyledHeading> 
                  <p>{dataItem.whatServicesDoYouProvide_}</p>
                </Fragment>
              : ""}

              {dataItem.whatAreYourOpeningHours_ ? 
                <Fragment>
                  <StyledHeading as="h2" className="h3">Opening Hours</StyledHeading> 
                  <p>{dataItem.whatAreYourOpeningHours_}</p>
                </Fragment>
              : ""}

              {dataItem.hasYourBusinessChangedSinceCovid19_ ? 
                <Fragment>
                  <StyledHeading as="h2" className="h3">How has your business changed since COVID-19?</StyledHeading> 
                  <p>{dataItem.hasYourBusinessChangedSinceCovid19_}</p>
                </Fragment>
              : ""}
              
              {dataItem.canYouFulfillOrdersForPeopleAndHaveThemDelivered_ ? 
                <Fragment>
                  <StyledHeading as="h2" className="h3">Can you fulfill orders for people and have them delivered?</StyledHeading> 
                  <p>{dataItem.canYouFulfillOrdersForPeopleAndHaveThemDelivered_}</p>
                </Fragment>
              : ""}

              {dataItem.doYouHaveAnOnlineStore_ ? 
                <Fragment>
                  <StyledHeading as="h2" className="h3">Do you have an online store?</StyledHeading> 
                  <p>{dataItem.doYouHaveAnOnlineStore_}</p>
                </Fragment>
              : ""}
            </BusinessDetails>

            <Link to="/businesses/">See All Businesses</Link>
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