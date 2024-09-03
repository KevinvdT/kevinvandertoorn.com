import React, { Component } from 'react';

import styled from 'styled-components';
import photos from './photos.svg';
import photosSm from './photos-sm.svg'; // Import the smaller image
import { theme } from '../../../styles/theme';

const Wrapper = styled.div`
  
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center; /* Align items to the top when stacked vertically */
  }
`;

const Img = styled.img`
  max-width: calc(100% - 3rem);
`;

class Photos extends Component {
  constructor(props) {
    super(props);
    // Initialize state with the default image
    this.state = {
      photoSrc: photos,
    };
  }

  componentDidMount() {
    // Add resize event listener when the component mounts
    window.addEventListener('resize', this.updateImage);
    // Call the function immediately to set the initial image source
    this.updateImage();
  }

  componentWillUnmount() {
    // Remove resize event listener when the component unmounts
    window.removeEventListener('resize', this.updateImage);
  }

  updateImage = () => {
    // Get the breakpoint value from the theme
    const breakpoint = parseInt(theme.breakpoints.sm, 10); // Convert breakpoint to a number

    // Update the image source based on the screen size
    if (window.innerWidth <= breakpoint) {
      this.setState({ photoSrc: photosSm }); // Use small image for small screens
    } else {
      this.setState({ photoSrc: photos }); // Use default image for larger screens
    }
  };

  render() {
    return (

      <Wrapper>
        <Img src={this.state.photoSrc} alt="Photos of me" /> {/* Dynamically use the state variable */}
      </Wrapper>

    );
  }
}

export default Photos;
