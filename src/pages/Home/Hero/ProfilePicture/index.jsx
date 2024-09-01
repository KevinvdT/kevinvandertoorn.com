import React from 'react';
import styled from 'styled-components';
import profileImage from './profile-picture.jpg';  // Adjust the path to match the new location

// Styled component for the circular profile picture
const StyledProfilePicture = styled.img`
  width: 327px;  /* Adjust the size as needed */
  max-width: 90%;
  height: auto; /* Adjust the size as needed */
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover; /* Ensures the image covers the container without stretching */

  @media (prefers-color-scheme: dark) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 195px;
  }
`;

// Wrapper to align the profile picture to the right
const ProfileWrapper = styled.div`
  display: flex;
  width: 100%; /* Ensures the wrapper takes full width of the parent container */
  justify-content: flex-end; /* Aligns content to the right */

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center; /* Align items to the top when stacked vertically */
  
  }
`;

const ProfilePicture = () => {
  return (
    <ProfileWrapper>
      <StyledProfilePicture
        src={profileImage}  /* Use the imported image */
        alt="Kevin's Profile Picture"  /* Replace with your actual alt text */
      />
    </ProfileWrapper>
  );
};

export default ProfilePicture;