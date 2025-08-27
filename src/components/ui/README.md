# Modal Components

This directory contains reusable modal components for displaying project details and other content.

## Components

### Modal
A base modal component with overlay, header, and content area.

**Props:**
- `isOpen` (boolean): Controls whether the modal is visible
- `onClose` (function): Callback function when modal should close
- `title` (string): Modal header title
- `children` (node): Content to display in the modal body
- `maxWidth` (string, optional): Maximum width of the modal (default: '600px')

**Usage:**
```jsx
import Modal from './Modal';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Project Details"
  maxWidth="700px"
>
  <p>Your content here...</p>
</Modal>
```

### ProjectDetails
A specialized component for displaying project information in a structured format.

**Props:**
- `title` (string): Project title
- `description` (string): Project description
- `technologies` (array): Array of technology tags
- `challenges` (string, optional): Challenges and solutions description
- `features` (array, optional): Array of key features
- `liveDemoUrl` (string, optional): URL to live demo
- `codeUrl` (string, optional): URL to source code

**Usage:**
```jsx
import ProjectDetails from './ProjectDetails';

<ProjectDetails
  title="Project Name"
  description="Project description..."
  technologies={['React', 'Node.js', 'MongoDB']}
  challenges="Technical challenges faced..."
  features={['Feature 1', 'Feature 2', 'Feature 3']}
  liveDemoUrl="https://demo.com"
  codeUrl="https://github.com/project"
/>
```

## Integration with ProjectItem

The `ProjectItem` component now supports a `projectDetails` prop that will automatically show a "Read More" button and open the modal with project details.

**Usage:**
```jsx
<ProjectItem
  imageSrc={projectImage}
  title="Project Title"
  description="Short description..."
  color="#006FD0"
  projectDetails={{
    title: "Project Title",
    description: "Full project description...",
    technologies: ['Tech 1', 'Tech 2'],
    challenges: "Challenges description...",
    features: ['Feature 1', 'Feature 2'],
    liveDemoUrl: "https://demo.com",
    codeUrl: "https://github.com/project"
  }}
/>
```

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Keyboard navigation (ESC to close) and proper ARIA labels
- **Animations**: Smooth fade-in and slide-up animations
- **Click Outside**: Click outside modal to close
- **Body Scroll Lock**: Prevents background scrolling when modal is open
- **Customizable**: Flexible content and styling options
