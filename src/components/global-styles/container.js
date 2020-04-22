// This creates a container Component. The base component of this is the <Container>
// If you wish to use sub-components, such as a container that makes your section 
// less wide, you can do so by putting a <Container> inside a <Container> with 
// appropriate props, such as 
// <Container>
//   <Container narrowContent>
//   </Container>
// </Container>

import styled, { css } from "styled-components"

const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  ${props => props.backgroundColor && css `
    background-color: var(--${props.backgroundColor});
  `}
  ${props => props.narrow && css `
    max-width: 768px;
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
  `}
  ${props => props.narrowContent && css `
    max-width: 540px;
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
  `}
  ${props => props.fullWidth && css `
    max-width: 100%;
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
  `}
  ${props => props.marginTop && css `
    margin-top: calc(var(--line-height) * 3);
  `}
  ${props => props.marginBottom && css `
    margin-bottom: calc(var(--line-height) * 3);
  `}
  ${props => props.paddingAll && css `
    padding: 3rem;
  `}
  ${props => props.paddingLeft && css `
    padding-left: 3rem;
  `}
  ${props => props.paddingRight && css `
    padding-right: 3rem;
  `}
  ${props => props.paddingTop && css `
    padding-top: 3rem;
  `}
  ${props => props.paddingBottom && css `
    padding-bottom: 3rem;
  `}
`

export default Container
