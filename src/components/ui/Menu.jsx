import React, { Component } from 'react';
import styled from 'styled-components';

// Styled component for the Menu container
const MenuContainer = styled.div`
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')}; /* Fixed when scrolling */
  top: ${({ isFixed }) => (isFixed ? '20px' : '50px')}; /* Adjust position based on scroll */
  left: 50%;
  transform: translateX(-50%); /* Center the menu horizontally */
  background-color: ${({ theme }) => theme.colors.light.background}88; /* Light mode background color */
  backdrop-filter: blur(10px); /* Background blur effect */
  padding: 10px 20px;
  border-radius: 30px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for elevation */
  display: flex;
  gap: 20px; /* Space between menu items */
  z-index: 1000; /* Ensure it stays on top of other elements */
  //transition: top 0.3s ease; /* Smooth transition when changing position */
  outline: ${({ isFixed }) => (isFixed ? '1px' : '0')} solid ${({ theme }) => theme.colors.light.primaryText};
  @media (prefers-color-scheme: dark) {
    background-color: ${({ theme }) => theme.colors.dark.background}88; /* Dark mode background color */
    outline: ${({ isFixed }) => (isFixed ? '2px' : '0')} solid ${({ theme }) => theme.colors.dark.secondaryText}44;
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: fixed; /* Always fixed on small screens */
    top: auto; /* Remove top positioning */
    bottom: 20px; /* Stick the menu 20px from the bottom */
    outline: 1px solid ${({ theme }) => theme.colors.light.secondaryText};
    @media (prefers-color-scheme: dark) {
      outline: 1px solid ${({ theme }) => theme.colors.dark.secondaryText};
    }
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.light.primaryText : theme.colors.light.secondaryText}; /* Primary color when active, secondary otherwise */
  font-weight: 600; /* Font weight set to 600 for all menu items */
  cursor: pointer;
  padding: 5px 10px; /* Padding around menu item text */
  border-radius: 5px; /* Rounded corners for menu item */

  transition: color 0.3s ease; /* Smooth transition for color change */

  &:hover {
    color: ${({ theme }) => theme.colors.light.primaryText}; /* Change to primary color on hover */
    text-decoration: none; /* Remove underline on hover */
  }

  @media (prefers-color-scheme: dark) {
    color: ${({ theme, isActive }) =>
    isActive ? theme.colors.dark.primaryText : theme.colors.dark.secondaryText}; /* Primary color when active, secondary otherwise */

    &:hover {
      color: ${({ theme }) => theme.colors.dark.primaryText}; /* Change to primary color on hover in dark mode */
      text-decoration: none; /* Remove underline on hover */
    }
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFixed: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 30) {
      this.setState({ isFixed: true });
    } else {
      this.setState({ isFixed: false });
    }
  }

  render() {
    const { isFixed } = this.state;
    return (
      <MenuContainer isFixed={isFixed}>
        <MenuItem href="#home" isActive={true}>Home</MenuItem>
        <MenuItem href="#about">About</MenuItem>
        <MenuItem href="#work">Work</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </MenuContainer>
    );
  }
}

export default Menu;
