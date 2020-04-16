import styled, { css } from "styled-components"

// Using a h1 here as our default, but it will be overridden each time it's used, like so:
// <StyledHeading as="h2">Heading Text Here</StyledHeading>

const StyledHeading = styled.h1`
  color: var(--primary);
  ${props => props.h1 && css `
    padding-top: 1rem;
  `}
`

export default StyledHeading