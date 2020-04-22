import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Article = styled.article`
  width: 100%;
  border-left: 4px solid var(--secondary);
  background-color: var(--white);
  a {
    display: inline-block;
    margin-top: auto;
    color: black;
    text-decoration: none;
  }
  a:focus,
  a:hover {
    color: var(--secondary);
    text-decoration: underline;
  }
`

const CardHeading = styled.h2`
  margin-bottom: 1rem;
  color: var(--black);
  font-weight: 300;
  font-size: calc(var(--heading-small) / 1.5);
  @media screen and (min-width: 768px) {
    font-size: var(--heading-small);
  }
`

const CardBody = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--grey);
`

const CardList = styled.ul`
  margin-bottom: 1rem;
  padding: 0;
`

const CardListItem = styled.li`
  list-style: none;
`

const Card = ({
  cardPath,
  cardTitle,
  cardAddress,
  cardCounty,
  cardLinkText
}) => (
  <Article>
    <CardBody>
      <CardHeading>
        <Link key={`${cardPath}`} to={`${cardPath}`}><strong>{`${cardTitle}`}</strong></Link>
      </CardHeading>
      <CardList>
        {cardAddress ? <CardListItem>{cardAddress}</CardListItem> : ""}
        {cardCounty ? <CardListItem>Co. {cardCounty}</CardListItem> : ""}
      </CardList>
      {cardLinkText ? 
        <Link key={`${cardPath}`} to={`${cardPath}`}><strong>{`${cardLinkText}`}</strong></Link> 
        : ""
      }
    </CardBody>
    
  </Article>
)

export default Card
