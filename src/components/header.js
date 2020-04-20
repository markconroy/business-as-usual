import React from "react"
import { StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Container from "./global-styles/container"
import CTAButton from "../components/ctabutton"

const StyledHeader = styled.header`
  margin-bottom: calc(var(--line-height) * 3);
  padding-top: .25rem;
  padding-right: 1rem;
  padding-bottom: .25rem;
  padding-left: 1rem;
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
  font-family: "Poppins", "Open Sans", sans-serif;
  font-weight: 700;
  font-size: var(--heading-small);
`

const ThinLogo = styled.span`
  font-family: "Poppins", "Open Sans", sans-serif;
  font-weight: 300;
  font-size: var(--heading-small);
`

const HeaderAdd = styled.div`
  padding-left: 1rem;
  text-align: center;
  position: relative;
  top: 2rem;
  @media screen and (min-width: 768px) {
    max-width: 250px;
    text-align: right;
  }
`

const Header = () => (

  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <StyledHeader>
        <Container>
          <HeaderInner>
            <HeaderBranding>
              <Link className="header__link" to="/">
                <ThinLogo>Business </ThinLogo> <FatLogo>as Usual</FatLogo>
              </Link>
            </HeaderBranding>
            <HeaderAdd>
              <CTAButton
                relativeLower
                CTAButtonLink="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform"
                CTAButtonText="Add Your Business"
              />
              {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform">Add Your Business</a> */}
            </HeaderAdd>
          </HeaderInner>
        </Container>
      </StyledHeader>
    )}
    />
)

export default Header
