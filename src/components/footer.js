import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 3px solid var(--primary);
  ul {
    margin: 0;
    @media screen and (min-width: 500px) {
      display: flex;
      flex-wrap: wrap;
    }
  }
  li {
    list-style: none;
    margin-right: 1rem;
  }
  .footer__inner {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.5rem 1rem;
  }
`
const Footer = () => (
  <StyledFooter>
    <div className="footer__inner">
  
      <p>
        © {new Date().getFullYear()}, An initiative of <a href="https://annertech.com">Annertech</a>.
      </p>
    </div>
  </StyledFooter>
)

export default Footer