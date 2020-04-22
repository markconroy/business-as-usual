import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeading from "../components/global-styles/headings.js"
import Container from "../components/global-styles/container"
import GridContainer from "../components/global-styles/grid-container"
import GridItem from "../components/global-styles/grid-item"
import CTAButton from "../components/ctabutton"

const IndexPage = () => (
  <Layout>
    <SEO />
    
    <Container>
      <Container narrowContent>
        <StyledHeading>Business As Usual</StyledHeading>
      </Container>
      
      <Container paddingNone>
        <GridContainer>
          <GridItem>
            <CTAButton
              internalLink
              CTAButtonLink="/businesses"
              CTAButtonText="View All Businesses"
            />
          </GridItem>
        
          <GridItem>
            <CTAButton
              internalLink
              CTAButtonLink="/businesses/counties"
              CTAButtonText="Search by County"
            />
          </GridItem>
        </GridContainer>
      </Container>

      <Container narrowContent paddingNone>
        <p>This website is a listing of businesses that are still operating through the COVID-19 Crisis in Ireland and Northern Ireland, brought to you by <a href="https://annertech.com">Annertech</a> and <a href="https://growremote.ie">Grow Remote</a></p>
        <p>If you want to be included in this directory, please:
          <Container marginBottom marginTop paddingNone>
            <CTAButton
              CTAButtonLink="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform"
              CTAButtonText="Add Your Business"
            />
          </Container>
        </p>
      </Container>
    </Container>

  </Layout>
)

export default IndexPage