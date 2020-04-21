import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/global-styles/container"
import StyledHeading from "../components/global-styles/headings.js"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Container narrow>
        <StyledHeading className="h2">Page NOT FOUND</StyledHeading>
        <p>You landed on a page that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Wanna go home?</Link>
      </Container>
    </Container>
  </Layout>
)

export default NotFoundPage
