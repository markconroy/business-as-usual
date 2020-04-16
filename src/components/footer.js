import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 3px solid var(--primary);
`

const FooterInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
`
const Footer = () => (
  <StyledFooter>
    <FooterInner>
      <p>
        © {new Date().getFullYear()}, An initiative of <a href="https://annertech.com">Annertech</a>, in cooperation with <a href="https://growremote.ie">Grow Remote Ireland</a>.
      </p>
      <p>If you'd like to build a version of this for your own country, <a href="https://github.com/markconroy/business-as-usual">the source code is available here</a>.</p>
    </FooterInner>
  </StyledFooter>
)

export default Footer