import styled from 'styled-components';

// Styled component for the TwoCol container
const TwoCol = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};  /* Reverse the row if reverse prop is true */
  justify-content: space-between;
  align-items: ${({ aligntop }) => (aligntop ? 'flex-start' : 'center')}; /* Conditionally align items */
  width: 100%;
  row-gap: 2.5rem;

  > * {
    flex: 1;  /* Ensures that each child (column) takes up equal space */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: ${({ fixed }) => (fixed ? 'row' : 'column')}; /* Stack columns vertically on smaller screens */
    align-items: flex-start; /* Align items to the top when stacked vertically */
  
  }

  > div {
    width: 100%; // Child containers have full width
  }
`;

export default TwoCol;
