import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import _ from 'lodash'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import StyledHeading from "../components/global-styles/headings.js"
import Container from "../components/global-styles/container"
import CTAButton from "../components/ctabutton"
import ContainerNarrowContent from "../components/global-styles/container-narrow-content"

const BusinessHeader = styled.div`
  margin-bottom: calc(var(--line-height) * 3);
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  border-left: 3px solid var(--secondary);
  font-weight: bold;
  h1 {
    margin-bottom: 2rem;
  }
  h1 ~ br {
    margin-bottom: .25rem;
  }
  a {
    color: var(--secondary);
    display: inline-block;
    margin-top: 1.5rem;
  }
  a:focus,
  a:hover {
    color: var(--primary-dark);
  }
  a.button {
    border: 2px solid var(--secondary);
    padding: 0.5rem 2.5rem;
    border-radius: 2rem;
    margin-right: 1.5rem;
    text-decoration: none;
    transition: background 200ms linear;
  }
  a.button:hover {
    background: var(--secondary);
    color: var(--white);
    text-decoration: underline;
  }
  a.button:focus {
    text-decoration: underline;
    color: var(--secondary);
  }
`

const BusinessDetails = styled.div`
color: var(--grey);
h2 {
    margin-bottom: .5rem;
    color: var(--grey);
  }
  h2 ~ h2 {
    margin-top: 3rem;
  }
  + div {
    margin-top: calc(var(--line-height) * 3);
    margin-bottom: calc(var(--line-height) * 3);
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
              <Fragment><br></br>{dataItem.postcode ? 
                <Fragment><br></br>{dataItem.postcode}, </Fragment>: ""}<Link to={`/businesses/${_.kebabCase(dataItem.county)}`} >{dataItem.county}</Link></Fragment>
            : ""}

            
            {dataItem.emailAddress ? 
              <Fragment>
                <br></br><a href={`mailto:${dataItem.emailAddress}`} className={`button`}>Email Us</a>
              </Fragment>
            : ""}
            
            {dataItem.website ? 
              <Fragment>    
                <a href={dataItem.website} className={`button`}>Visit Our Website</a>
              </Fragment>
            : ""}
          </BusinessHeader>
        </Container>
        
        <Container paddingLeft paddingRight narrowContent>
          <ContainerNarrowContent>
            <BusinessDetails>
              {dataItem.provideAShortDescriptionOfYourBusiness ? 
                <Fragment>
                  <StyledHeading as="h2" className="h3">About Us</StyledHeading> 
                  <p>{dataItem.provideAShortDescriptionOfYourBusiness}</p>
                </Fragment>
              : ""}

              {dataItem.yourServices ? 
                <Fragment>
                  <StyledHeading as="h2" className="h3">Our Services</StyledHeading> 
                  <p>{dataItem.yourServices}</p>
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

            <CTAButton 
              marginTop
              internalLink
              CTAButtonLink="/businesses"
              CTAButtonText="See All Businesses"
            />

          </ContainerNarrowContent>
        </Container>
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
      yourServices
    }
  }
`