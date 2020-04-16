import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Container from "./global-styles/container"

const StyledHeader = styled.header`
  margin-bottom: 1.5rem;
  background-color: var(--primary-dark);

  .header__link {
    text-decoration: none;
    display: inline-block;
    color: white;
    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`

const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > * {
     flex-basis: 50%;
    }
  }
`

const HeaderBranding = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const FatLogo = styled.span`
  font-weight: 700;
  font-size: var(--heading-small);
`

const ThinLogo = styled.span`
  font-weight: 300;
  font-size: var(--heading-small);
`

const HeaderAdd = styled.div`
  padding-left: 1rem;
  text-align: center;
  a {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 2rem;
    position: relative;
    top: 2.5rem;
    color: var(--white);
    text-decoration: none;
    background-color: var(--secondary);
  }
  a:focus,
  a:hover {
    background-color: var(--primary);
    color: var(--white);
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    max-width: 250px;
    text-align: right;
  }
`

const Header = () => (
  <StyledHeader>
    <Container>
      <HeaderInner>
        <HeaderBranding>
          <Link className="header__link" to="/">
            <ThinLogo>Business </ThinLogo> <FatLogo>as Usual</FatLogo>
          </Link>
        </HeaderBranding>
        <HeaderAdd>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform">Add Your Business</a>
        </HeaderAdd>
      </HeaderInner>
    </Container>
  </StyledHeader>
)

export default Header
