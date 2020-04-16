import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Article = styled.article`
  border-left: 4px solid var(--secondary);
  width: 100%;
  a {
    display: inline-block;
    margin-top: auto;
    color: black;
    text-decoration: none;
  }
  a:focus,
  a:hover {
    color: var(--secondary);
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
  cardAddress1,
  cardAddress2,
  cardTown,
  cardCounty
}) => (
  <Article>
    
    <CardBody>
      <CardHeading>{cardTitle}</CardHeading>  
      <CardList>
        {cardAddress1 ? <CardListItem>{cardAddress1}</CardListItem> : ""}
        {cardAddress2 ? <CardListItem>{cardAddress2}</CardListItem> : ""}
        {cardTown ? <CardListItem>{cardTown}</CardListItem> : ""}
        {cardCounty ? <CardListItem>{cardCounty}</CardListItem> : ""}
      </CardList>
      <Link key={`${cardPath}`} to={`${cardPath}`}>Read More</Link>
    </CardBody>
    
  </Article>
)

export default Card
