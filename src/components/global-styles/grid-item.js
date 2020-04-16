import styled from "styled-components"

const GridItem = styled.li`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  list-style: none;
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (min-width: 414px) {
    width: calc(50% - 2rem);
  }
  @media screen and (min-width: 768px) {
    width: calc(100% / 3 - 2rem);
  }
`

export default GridItem

