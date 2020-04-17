import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const StyledCTAButton = styled.div`
  a {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 2rem;
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
`

const CTAButton = ({
  CTAButtonLink,
  CTAButtonText,
  internalLink,
}) => (
  <StyledCTAButton>
    {internalLink ?
    <Fragment>
      <Link key={`${CTAButtonLink}`} to={`${CTAButtonLink}`}>{CTAButtonText}</Link>
    </Fragment>
    : 
    <Fragment>
      <a href={`${CTAButtonLink}`}>{CTAButtonText}</a>
    </Fragment>
    }
  </StyledCTAButton>
)

export default CTAButton
