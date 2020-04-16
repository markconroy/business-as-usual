import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Article = styled.article`
  border-left: 4px solid var(--primary);
  border-top: 4px solid var(--primary);
  width: 100%;
  box-shadow: 
    4px 4px 0px 0px #fff,
    8px 8px 0px 0px var(--primary)
  ;
  &:focus-within,
  &:hover {
    background-color: var(--primary);
  }
  a {
    display: block;
    height: 100%;
    color: black;
    text-decoration: none;
  }
  a:focus {
    outline: 4px dashed var(--primary);
  }
  a:focus,
  a:hover {
    color: white;
  }
  a:focus h2,
  a:hover h2 {
    text-decoration: underline;
    color: white;
  }
`

const CardHeading = styled.h2`
  margin-bottom: 0;
  padding: .5rem 1rem 0;
  color: var(--primary);
`

const CardBody = styled.div`
  padding: 1rem;
`

const Card = ({
  cardPath,
  cardTitle,
}) => (
  <Article>
    <Link key={`${cardPath}`} to={`${cardPath}`}>
      <CardHeading>{cardTitle}</CardHeading>

      <CardBody>
        <p>Card Body Here</p>
      </CardBody>
    </Link>
  </Article>
)

export default Card
