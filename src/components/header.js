import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledHeader = styled.header`
  border-bottom: 4px solid var(--primary);
  margin-bottom: 1.5rem;

  .header__inner {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > * {
      flex-basis: 50%;
    }
  }
  .header__link {
    text-decoration: none;
    background-color: var(--primary);
    display: inline-block;
    color: white;
    padding: .5rem;
    &:focus,
    &:hover {
      text-decoration: underline;
      background-color: white;
      color: var(--primary);
    }
  }
  .header__link--with-border {
    border: 3px solid var(--primary);
    border-bottom: 0;
    &:focus,
    &:hover {
      /* border-color:  */
    }
  }
  .header__add {
    padding-left: 1rem;
    text-align: right;
    max-width: 250px;
  }
`

const Header = () => (
  <StyledHeader>
    <div className="header__inner">
      <div className="header__branding">
        <div className="header__branding-logo">
          <Link className="header__link" to="/">
            Business As Usual
          </Link>
        </div>
      </div>
      <div className="header__add">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform">Add Your Business</a>
      </div>
    </div>
  </StyledHeader>
)

export default Header
