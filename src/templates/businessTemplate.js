import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import _ from 'lodash'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import StyledHeading from "../components/global-styles/headings.js"
import Container from "../components/global-styles/container"
import CTAButton from "../components/ctabutton"

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
    margin-top: 1.5rem;
    display: inline-block;
    color: var(--primary);
  }
  a:focus,
  a:hover {
    color: var(--primary-dark);
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

export default function BusinessTemplate({data}) {
  
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
            
            {dataItem.address ? 
            
              <Fragment>
                {dataItem.address}, <Link to={`/businesses/${_.kebabCase(dataItem.county)}`} >County {dataItem.county}</Link>
              </Fragment> 
              : 
              <Fragment>
                <br></br>
                <Link to={`/businesses/${_.kebabCase(dataItem.county)}`} >{dataItem.county}</Link>
              </Fragment>  
            }
            
            <Fragment><br></br>{dataItem.postcode}</Fragment>
            
            {dataItem.phoneNumber ? 
              <Fragment>
                <br></br>Phone: <a href={`tel:${dataItem.phoneNumber}`}>{dataItem.phoneNumber}</a>
              </Fragment> 
              : ""
            }
            
            {dataItem.emailAddress || dataItem.website ? 
              dataItem.emailAddress && dataItem.website ? 
                <Fragment>
                  <br></br><a href={`mailto:${dataItem.emailAddress}`}>Email Us</a> | <a href={dataItem.website}>Visit Our Website</a>
                </Fragment>
                : dataItem.emailAddress && !(dataItem.website) ? 
                  <Fragment>
                    <br></br><a href={`mailto:${dataItem.emailAddress}`}>Email Us</a>
                  </Fragment> 
                  :
                  <Fragment>
                    <br></br><a href={dataItem.website}>Visit Our Website</a>
                  </Fragment>
              : ""
            }
          </BusinessHeader>
        </Container>
        
        <Container paddingLeft paddingRight>
          <Container narrowContent>
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
              internalLink
              CTAButtonLink="/businesses"
              CTAButtonText="See All Businesses"
            />

          </Container>
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