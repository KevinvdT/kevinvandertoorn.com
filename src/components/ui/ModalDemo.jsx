import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Button from './Button';

const DemoContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DemoContainer>
      <Button onClick={openModal}>
        Open Bottom Sheet Modal
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Project Details"
        maxWidth="700px"
      >
        <div>
          <h3>Jam With Music</h3>
          <p>
            A simple 16 step sequencer that lets users create and share music loops
            to practice with using the Web Audio API and JS.
          </p>

          <h4>| Technologies Used</h4>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span style={{
              backgroundColor: '#006FD0',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              JavaScript
            </span>
            <span style={{
              backgroundColor: '#006FD0',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              Web Audio API
            </span>
            <span style={{
              backgroundColor: '#006FD0',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              CSS Grid
            </span>
          </div>

          <h4>| Challenges & Solutions</h4>
          <p>
            Implementing precise timing for the sequencer while maintaining browser
            compatibility and managing audio resource loading efficiently.
          </p>

          <h4>| Key Features</h4>
          <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
            <li>Interactive step sequencer</li>
            <li>Customizable sound samples</li>
            <li>Shareable music patterns</li>
            <li>Real-time audio processing</li>
          </ul>

          <h4>| Additional Information</h4>
          <p>
            This project demonstrates advanced web audio capabilities and real-time
            user interaction. The sequencer allows musicians to create complex
            rhythmic patterns and share them with others for collaborative music
            making and practice sessions.
          </p>

          <h4>| Technical Implementation</h4>
          <p>
            The project uses the Web Audio API for precise timing and audio
            processing, combined with modern JavaScript features for smooth
            user interactions. The interface is built with responsive design
            principles to work across different devices and screen sizes.
          </p>

          <h4>| Future Enhancements</h4>
          <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
            <li>MIDI controller support</li>
            <li>Cloud-based pattern sharing</li>
            <li>Advanced sound synthesis</li>
            <li>Collaborative real-time editing</li>
            <li>Mobile app version</li>
            <li>Integration with music production software</li>
          </ul>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '30px' }}>
            <Button>Live Demo</Button>
            <Button secondary>View Code</Button>
          </div>
        </div>
      </Modal>
    </DemoContainer>
  );
};

export default ModalDemo;
