import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { IoIosClose } from "react-icons/io";
import useScreenSize from '../../hooks/useScreenSize';

const ANIMATION_MS = 300;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  opacity: 0;
  animation: ${({ closing }) => (closing ? 'fadeOut' : 'fadeIn')} 0.3s ease-out forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  background: ${({ theme }) => theme.colors.light.background};
  color: ${({ theme }) => theme.colors.light.primaryText};
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '800px'};
  max-height: calc(100svh - 50px);
  animation: ${({ closing }) => (closing ? 'slideDown' : 'slideUp')} 0.3s ease-out forwards;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);

  @keyframes slideUp {
    to {
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes slideDown {
    to {
      transform: translateX(-50%) translateY(100%);
    }
  }

  max-width: ${({ isMobile }) => isMobile ? '95vw' : '800px'};
  max-height: ${({ isMobile }) => isMobile ? '90vh' : 'calc(100svh - 50px)'};

  @supports (height: 100svh) {
    max-height: ${({ isMobile }) => isMobile ? 'calc(100svh - 15px)' : 'calc(100svh - 50px)'};
  }

  @supports (height: 100dvh) {
    max-height: ${({ isMobile }) => isMobile ? 'calc(100dvh - 15px)' : 'calc(100svh - 50px)'};
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    background: ${({ theme }) => theme.colors.dark.background};
    color: ${({ theme }) => theme.colors.dark.primaryText};
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.6);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 16px 24px;
  border-bottom: 1px solid #f0f0f0;
  background: inherit;
  flex-shrink: 0;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  font-family: 'Inter', 'Arial', sans-serif;
`;

const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: gray;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 400;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: gray;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.light.primary};
    outline-offset: 2px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #35393c;
    color: #8f9396;

    &:hover {
      background-color: #404448;
    }

    &:focus {
      outline-color: ${({ theme }) => theme.colors.dark.primary};
    }
  }
`;

const ModalBody = styled.div`
  padding: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.04);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.35);
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-track {
      background: rgba(255,255,255,0.06);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.22);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.32);
    }
  }
`;

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [closing, setClosing] = useState(false);
  const listenerRef = useRef(null);
  const { maxMobile } = useScreenSize();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    listenerRef.current = handleEscape;
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setClosing(false);
      document.addEventListener('keydown', listenerRef.current);
      document.body.style.overflow = 'hidden';
    } else if (shouldRender) {
      setClosing(true);
      document.removeEventListener('keydown', listenerRef.current);
      const timeout = setTimeout(() => {
        document.body.style.overflow = 'unset';
        setShouldRender(false);
        setClosing(false);
      }, ANIMATION_MS);
      return () => clearTimeout(timeout);
    }

    return () => { };
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <ModalOverlay closing={closing} onClick={onClose}>
      <ModalContent closing={closing} onClick={(e) => e.stopPropagation()} maxWidth={maxWidth} isMobile={maxMobile}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <IoIosClose />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
