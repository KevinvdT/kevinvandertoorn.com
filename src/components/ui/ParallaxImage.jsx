import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components for layers
const ParallaxContainer = styled.div`
  position: relative;
  width: 327px; /* Adjust size as needed */
  height: 327px; /* Adjust size as needed */
  border-radius: 50%; /* This makes the container a circle */
  overflow: hidden; /* Ensures the images are clipped inside the circle */
  perspective: 1000px;
  /* margin: auto; */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 195px;
    height: 195px;
  }
`;

const BackgroundLayer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 120%; /* Zoom background layer by 20% */
  height: 120%; /* Zoom background layer by 20% */
  object-fit: cover; /* Ensures the image scales nicely within the circle */
  // transform: scale(2) translateZ(-1px); /* Background moves slower and zoomed */
  transition: transform 0.5s ease-out;
`;

const ForegroundLayer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image scales nicely within the circle */
  transform: translateZ(0px); /* Foreground moves faster */
  transition: transform 0.5s ease-out;
`;

// Utility function to clamp values
const clamp = (value, min, max) => {
  return Math.max(min, Math.min(value, max));
};

// ParallaxImage component
const ParallaxImage = ({ front, back }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;

      const newOffsetX = (clientX - innerWidth / 2) / 100;
      const newOffsetY = (clientY - innerHeight / 2) / 100;

      // Clamp values to prevent excessive movement
      setOffsetX(clamp(newOffsetX, -20, 10)); // Adjust min/max as needed
      setOffsetY(clamp(newOffsetY, -20, 20)); // Adjust min/max as needed
    };

    const handleDeviceOrientation = (event) => {
      const { beta, gamma } = event; // beta: tilt front-to-back, gamma: tilt left-to-right

      // Normalize the values for a smoother effect
      const newOffsetX = gamma / 3; // Adjust divisor to control sensitivity
      const newOffsetY = beta / 3;

      // Clamp values to prevent excessive movement
      setOffsetX(clamp(newOffsetX, -20, 10)); // Adjust min/max as needed
      setOffsetY(clamp(newOffsetY, -20, 20)); // Adjust min/max as needed
    };

    // Add mouse movement listener for desktop
    window.addEventListener("mousemove", handleMouseMove);

    // Add device orientation listener for mobile
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  return (
    <ParallaxContainer>
      <BackgroundLayer
        src={back}
        alt="Background of profile picture"
        style={{
          transform: `translate(${-offsetX}px, ${-offsetY - 30}px) scale(1.05)`, // Combine scale and translate
        }}
      />
      <ForegroundLayer
        src={front}
        alt="Foreground of profile picture"
        style={{
          transform: `translate(${offsetX / 2}px, ${offsetY / 2}px)`, // Only translate for foreground
        }}
      />
    </ParallaxContainer>
  );
};

export default ParallaxImage;
