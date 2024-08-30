import styled from 'styled-components';

const Container = styled.section`
  max-width: 1200px;       // Ensures the container doesn't stretch too wide on larger screens
  margin: 0 auto;          // Centers the container
  padding: 2rem;           // Provides some spacing inside the container
  display: flex;           // Flexbox layout for internal alignment
  flex-direction: column;  // Stack children vertically by default
  align-items: center;     // Centers children horizontally

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;         // Smaller padding on smaller screens
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.5rem;       // Even smaller padding on mobile devices
  }
`;

export default Container;
