import styled from 'styled-components';

// PageContainer Component: Provides padding for the entire page
const PageContainer = styled.main`
  max-width: 71.25rem; // Sets maximum width for the entire page
  /* padding: 0 2rem; Adds padding to the left and right sides */
  margin: 0 auto; /* Centers the container */
  padding: 0 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2rem; /* Adjust side padding on medium screens */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 0.8rem; /* Adjust side padding on medium screens */
  }
`;

// Container Component: Provides internal padding for its content
const Container = styled.section`
  //border: 1px solid red;
  max-width: 100%; /* Ensures the container doesn't stretch too wide on larger screens */
  margin: 0 auto; /* Centers the container */
  padding: 8.125rem 4rem; /* Provides top/bottom and side padding for the container content */
  display: flex; /* Flexbox layout for internal alignment */
  flex-direction: column; /* Stack children vertically by default */


  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 8.125rem 2rem; /* Adjust side padding for small screens */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 8.125rem 0.8rem; /* Adjust side padding for small screens */
  }
`;

export { PageContainer, Container };
