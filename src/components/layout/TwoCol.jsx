import styled from 'styled-components';

// Styled component for the TwoCol container
const TwoCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 20px; // Provides space between the two columns

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: ${({ fixed }) => fixed ? 'row' : 'column'};
  }
`;

export default TwoCol;
