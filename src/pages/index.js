import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeading from "../components/global-styles/headings.js"
import Container from "../components/global-styles/container"
import CTAButton from "../components/ctabutton"

const IndexPage = () => (
  <Layout>
    <SEO />
    
    <Container>
      <Container narrowContent>
        <StyledHeading>Business As Usual</StyledHeading>
        <p>This website is a listing of businesses that are still operating through the COVID-19 Crisis in Ireland and Northern Ireland, brought to you by <a href="https://annertech.com">Annertech</a> and <a href="https://growremote.ie">Grow Remote</a></p>
        <p>If you want to be included in this directory, please:
          <Container marginBottom marginTop>
            <CTAButton
              CTAButtonLink="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform"
              CTAButtonText="Add Your Business"
            />
          </Container>
        </p>
        <p>You can use the search box above to search for businesses. You can also see listings of businesses.</p>
        <Container marginBottom>
          <ul>
            <li><Link to="/businesses">All Businesses</Link></li>
            <li><Link to="/businesses/counties">Businesses by County</Link></li>
          </ul>
        </Container>
      </Container>
    </Container>

  </Layout>
)

export default IndexPage