import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';  // Import connect from react-redux
import { setActiveSection } from '../../redux/slices/activeSectionSlice';  // Import the action to update the active section


// Styled component for the Menu container
const MenuContainer = styled.nav`
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'fixed')};
  top: ${({ isFixed }) => (isFixed ? '18px' : '18px')};
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.light.background}88;
  backdrop-filter: saturate(1.8) blur(20px);
  @supports not (backdrop-filter: saturate(1.8) blur(20px)) {
    background-color: ${({ theme }) => theme.colors.light.background}EE;
  }
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: ${({ isFixed }) => (isFixed ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  display: flex;
  justify-content: space-between;
  gap: ${({ isFixed }) => (isFixed ? '15px' : '35px')};
  transition: gap 0.7s;
  z-index: 1000;
  outline: ${({ isFixed }) => (isFixed ? '1px' : '0')} solid #dbdbdb;
  @media (prefers-color-scheme: dark) {
    background-color: ${({ theme }) => theme.colors.dark.background}88;
    outline: ${({ isFixed }) => (isFixed ? '1px' : '0')} solid #424242;
    @supports not (backdrop-filter: saturate(1.8) blur(20px)) {
      background-color: ${({ theme }) => theme.colors.dark.background}E4;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 10px 10px;
    ${({ isFixed }) => (!isFixed ? 'pointer-events: none;' : null)}
    opacity: ${({ isFixed }) => (!isFixed ? '0' : '1')};
    transition: opacity 0.3s;
    position: fixed;
    top: auto;
    bottom: 11px;
    outline: 1px solid #dbdbdb;
    gap: 0px;
    @media (prefers-color-scheme: dark) {
      outline: 1px solid #424242;
    }
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.light.primaryText : theme.colors.light.secondaryText};
  font-weight: 600;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.light.primaryText};
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    color: ${({ theme, isActive }) =>
    isActive ? theme.colors.dark.primaryText : theme.colors.dark.secondaryText};

    &:hover {
      color: ${({ theme }) => theme.colors.dark.primaryText};
      text-decoration: none;
    }
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFixed: false,
    };

    // this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { setActiveSection } = this.props;
    const sections = ['home', 'about', 'work', 'skills', 'contact'];
    let activeSectionId = 'home';

    // Check if scrolled to the bottom
    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 25;

    if (isBottom) {
      activeSectionId = 'contact';
    }
    else {
      // Determine which section is currently active
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= 50) {
            activeSectionId = sections[i];
          }
        }
      }
    }
    // Update the active section in Redux if it has changed
    if (activeSectionId !== this.props.activeSection) {
      setActiveSection({ sectionId: activeSectionId, scroll: false });
    }

    // Toggle the menu's fixed state based on scroll position
    if (window.scrollY > 40) {
      this.setState({ isFixed: true });
    } else {
      this.setState({ isFixed: false });
    }
  };

  handleMenuItemClick = (event, sectionId) => {
    event.preventDefault();
    this.props.setActiveSection({ sectionId });
  };

  render() {
    const { isFixed } = this.state;
    const { activeSection } = this.props;

    return (
      <MenuContainer isFixed={isFixed}>
        <MenuItem href="#home" isActive={activeSection === 'home'} onClick={() => this.handleMenuItemClick(e, 'home')}>
          Home
        </MenuItem>
        <MenuItem href="#about" isActive={activeSection === 'about'} onClick={() => this.handleMenuItemClick(e, 'about')}>
          About
        </MenuItem>
        <MenuItem href="#work" isActive={activeSection === 'work'} onClick={() => this.handleMenuItemClick(e, 'work')}>
          Work
        </MenuItem>
        <MenuItem href="#skills" isActive={activeSection === 'skills'} onClick={() => this.handleMenuItemClick(e, 'skills')}>
          Skills
        </MenuItem>
        <MenuItem href="#contact" isActive={activeSection === 'contact'} onClick={() => this.handleMenuItemClick(e, 'contact')}>
          Contact
        </MenuItem>
      </MenuContainer>
    );
  }
}

// Map state to props
const mapStateToProps = (state) => ({
  activeSection: state.activeSection.activeSection,
});

// Map dispatch to props
const mapDispatchToProps = {
  setActiveSection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
