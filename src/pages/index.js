import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeading from "../components/global-styles/headings.js"
import Container from "../components/global-styles/container"


const IndexPage = () => (
  <Layout>
    <SEO />
    
    <Container>
      <StyledHeading>Business As Usual</StyledHeading>
      <p>A listing of businesses that are still operating through the COVID-19 Crisis in Ireland and Northern Ireland.</p>
      <p>In the meantime, to be included in this new directory, please <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform">fill in this form</a>.</p>
    </Container>

  </Layout>
)

export default IndexPage