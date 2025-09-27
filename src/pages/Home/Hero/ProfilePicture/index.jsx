import React from 'react';
import styled from 'styled-components';
import profileImage from './profile-picture.jpg';
import back from './back.png';
import front from './front.png';
import ParallaxImage from '../../../../components/ui/ParallaxImage';
import useScreenSize from '../../../../hooks/useScreenSize';

// Styled component for the circular profile picture
const StyledProfilePicture = styled.img`
  width: ${({ isMobile }) => isMobile ? '195px' : '327px'};
  max-width: 90%;
  height: auto; /* Adjust the size as needed */
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover; /* Ensures the image covers the container without stretching */

  @media (prefers-color-scheme: dark) {
  }
`;

// Wrapper to align the profile picture to the right
const ProfileWrapper = styled.div`
  display: flex;
  width: 100%; /* Ensures the wrapper takes full width of the parent container */
  justify-content: ${({ isMobile }) => isMobile ? 'center' : 'flex-end'};
`;

const ProfilePicture = () => {
  const { maxMobile } = useScreenSize();

  // return (
  //   <ProfileWrapper>
  //     <StyledProfilePicture
  //       src={profileImage}  /* Use the imported image */
  //       alt="Kevin's Profile Picture"  /* Replace with your actual alt text */
  //     />
  //   </ProfileWrapper>
  // );
  return (
    <ProfileWrapper isMobile={maxMobile}>
      <ParallaxImage
        front={front}
        back={back}
      />
    </ProfileWrapper>
  );
};

export default ProfilePicture;