import React from "react"
import styled from "styled-components"
import Container from "./global-styles/container"

const StyledFooter = styled.footer`
  background-color: var(--primary-dark);
  color: var(--white);
  a {
    color: var(--white);
    border-bottom: 2px dashed var(--secondary);
    text-decoration: none;
  }
  a:focus,
  a:hover {
    color: var(--secondary);
    text-decoration: none;
    border-bottom: 2px solid var(--white);
  }
`

const FooterInner = styled.div`
  padding: 1.5rem 0;
`
const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterInner>
        <p>
          © {new Date().getFullYear()}, An initiative of <a href="https://annertech.com">Annertech</a>, in partnership with <a href="https://growremote.ie">Grow Remote Ireland</a>.
        </p>
        <p>If you'd like to build a version of this for your own country, <a href="https://github.com/markconroy/business-as-usual">the source code is available here</a>.</p>
      </FooterInner>
    </Container>
  </StyledFooter>
)

export default Footer