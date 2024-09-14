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
  transform: translateY(${props => props.translateOffset}px); /* Apply translateY based on the state */
  transition: transform 0.1s ease-out; /* Smooth transition effect */
`;

class Photos extends Component {
  constructor(props) {
    super(props);
    // Initialize state with the default image and the translate offset for parallax
    this.state = {
      photoSrc: photos,
      translateOffset: 0, // Initial translate offset
      initialTop: null, // Initial top position of the image
      inView: false, // Whether the image is currently in the viewport
    };

    this.imageRef = React.createRef(); // Reference to the image DOM element
  }

  componentDidMount() {
    // Add resize event listener
    window.addEventListener('resize', this.updateImage);

    // Set up IntersectionObserver
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when at least 10% of the image is visible
    });

    // Observe the image element
    if (this.imageRef.current) {
      this.observer.observe(this.imageRef.current);
    }

    // Call the function immediately to set the initial image source
    this.updateImage();
  }

  componentWillUnmount() {
    // Remove event listeners and observer when the component unmounts
    window.removeEventListener('resize', this.updateImage);
    window.removeEventListener('scroll', this.handleScroll);

    if (this.observer) {
      this.observer.disconnect();
    }
  }

  updateImage = () => {
    const breakpoint = parseInt(theme.breakpoints.sm, 10); // Convert breakpoint to a number
    if (window.innerWidth <= breakpoint) {
      this.setState({ photoSrc: photosSm }); // Use small image for small screens
    } else {
      this.setState({ photoSrc: photos }); // Use default image for larger screens
    }
  };

  handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // Capture the initial top position when the image enters the viewport
      const { top } = this.imageRef.current.getBoundingClientRect();
      this.setState({ inView: true, initialTop: top });
      window.addEventListener('scroll', this.handleScroll);
    } else {
      // Remove the scroll listener when the image exits the viewport
      this.setState({ inView: false });
      window.removeEventListener('scroll', this.handleScroll);
    }
  };

  handleScroll = () => {
    const { initialTop } = this.state;

    if (initialTop !== null) {
      const scrollPosition = window.scrollY + window.innerHeight;
      const imageDistanceFromTop = initialTop + scrollPosition;

      // Calculate a slight parallax effect based on scroll position relative to the image's initial top position
      const parallaxSpeed = -2; // Adjust for a slight effect
      const translateOffset = (scrollPosition - initialTop) * parallaxSpeed;

      this.setState({ translateOffset });
    }
  };

  render() {
    return (
      <Wrapper>
        <Img
          ref={this.imageRef} // Assign the imageRef to the image element
          src={this.state.photoSrc}
          alt="Photos of me"
          translateOffset={this.state.translateOffset} // Pass translate offset to styled component
        />
      </Wrapper>
    );
  }
}

export default Photos;
