import styled, { css } from "styled-components"

const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
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
