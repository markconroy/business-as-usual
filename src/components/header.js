import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import Container from "./global-styles/container"

const StyledHeader = styled.header`
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

const HeaderRight = styled.div`

`

const HeaderMenu = styled.ul`
  display: flex;
  padding-left: 0;
  height: 100%;
  margin-bottom: 0;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`

const HeaderMenuItem = styled.li`
  list-style: none;
  display: flex;
  height: 100%;
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    padding: .75rem 1rem;
    color: var(--white);
    text-decoration: none;
  }
  &:last-of-type a {
    background-color: var(--secondary);
    font-weight: bold;
  }
  a:focus,
  a:hover {
    background-color: var(--primary);
    text-decoration: underline;
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
            <HeaderRight>
              <HeaderMenu>
                <HeaderMenuItem><Link to="/businesses">All Businesses</Link></HeaderMenuItem>
                <HeaderMenuItem><Link to="/businesses/counties">By County</Link></HeaderMenuItem>
                <HeaderMenuItem><a href="https://docs.google.com/forms/d/e/1FAIpQLSfUgFwGuqAlE3I4scpiOosDwiJntFnA8yatxTbgfBWdxSZZiw/viewform">Add Your Business</a></HeaderMenuItem>
              </HeaderMenu>
            </HeaderRight>
          </HeaderInner>
        </Container>
      </StyledHeader>
    )}
    />
)

export default Header
