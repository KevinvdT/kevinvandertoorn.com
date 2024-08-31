import styled from 'styled-components';

// Divider Component
const Divider = styled.hr`
  /* max-width: 75.25rem; // Full width of its parent container */
  border: none; // Removes default border styling
  border-top: 1px solid #979797; // Divider styling
  margin: 0 auto;
  width: 100%;

  /* @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 1.5rem;         // Smaller padding on smaller screens
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    margin: 0 0.5rem;       // Even smaller padding on mobile devices
  } */

  @media (prefers-color-scheme: dark) {
    border-top: 1px solid #686868;
  }
`;

export default Divider;
