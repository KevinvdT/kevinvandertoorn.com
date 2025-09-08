# Project Management System - React Components

This directory contains all my portfolio projects as self-contained React components with built-in translations and maximum customizability.

## 🏗️ **Project Structure**

Each project has its own directory with the following structure:

```
Projects/
├── DelfHyperloop/
│   ├── index.jsx              # Main project component
│   ├── ModalContent.jsx       # Modal content component
│   ├── i18n/                  # Project-specific translations
│   │   ├── en.json            # English translations
│   │   ├── nl.json            # Dutch translations
│   │   ├── de.json            # German translations
│   │   └── index.js           # Translations export
│   └── styles.js              # Custom styled components (optional)
├── AlbertHeijn/
│   ├── index.jsx
│   ├── ModalContent.jsx
│   ├── i18n/
│   │   ├── en.json
│   │   ├── nl.json
│   │   ├── de.json
│   │   └── index.js
│   └── styles.js
└── index.js                   # Project registry
```

## 📝 **Adding a New Project**

### 1. **Create Project Directory**
I create a new directory for my project (e.g., `MyProject/`).

### 2. **Create i18n Directory and Files**
I create an `i18n/` subdirectory with translation files:

```json
// i18n/en.json
{
  "title": "My Project",
  "description": "Project description...",
  "modal": {
    "title": "My Project",
    "description": "Detailed description...",
    "technologies": {
      "title": "Technologies Used",
      "list": ["Tech1", "Tech2", "Tech3"]
    }
  }
}
```

```json
// i18n/nl.json
{
  "title": "Mijn Project",
  "description": "Project beschrijving...",
  "modal": {
    "title": "Mijn Project",
    "description": "Gedetailleerde beschrijving...",
    "technologies": {
      "title": "Gebruikte Technologieën",
      "list": ["Tech1", "Tech2", "Tech3"]
    }
  }
}
```

```json
// i18n/de.json
{
  "title": "Mein Projekt",
  "description": "Projektbeschreibung...",
  "modal": {
    "title": "Mein Projekt",
    "description": "Detaillierte Beschreibung...",
    "technologies": {
      "title": "Verwendete Technologien",
      "list": ["Tech1", "Tech2", "Tech3"]
    }
  }
}
```

Create `i18n/index.js`:
```javascript
import en from './en.json';
import nl from './nl.json';
import de from './de.json';

const myprojectTranslations = {
  en,
  nl,
  de
};

export default myprojectTranslations;
```

### 3. **Create Main Component** (`index.jsx`)
```jsx
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import projectImage from '../img/myproject.png';
import myprojectTranslations from './i18n';

const ProjectContainer = styled.div`
  // Custom styling for this specific project
`;

const ProjectImage = styled.img`
  width: 356px;
  height: auto;
  flex-shrink: 0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
  border-radius: 20px;
`;

const ProjectContent = styled.div`
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-family: 'Inter','Arial',sans-serif;
  font-size: 1.0625rem;
  color: #yourcolor;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.div`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #yourcolor;
  
  p {
    margin-bottom: 1rem;
  }
  
  em {
    font-style: italic;
    font-weight: 500;
  }
`;

const MyProject = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const translations = myprojectTranslations[currentLanguage] || myprojectTranslations.en;
  
  return (
    <ProjectContainer>
      <ProjectImage src={projectImage} alt="My Project" />
      <ProjectContent>
        <ProjectTitle>{translations.title}</ProjectTitle>
        <ProjectDescription>
          <p>{translations.description}</p>
        </ProjectContent>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default MyProject;
```

### 4. **Create Modal Content Component** (`ModalContent.jsx`)
```jsx
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Button from '../../../../components/ui/Button';
import myprojectTranslations from './i18n';

const ModalContainer = styled.div`
  color: #333;
  padding-bottom: 20px;
`;

// Add my custom styled components here

const MyProjectModalContent = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const translations = myprojectTranslations[currentLanguage] || myprojectTranslations.en;
  
  return (
    <ModalContainer>
      <h3>{translations.modal.title}</h3>
      <p>{translations.modal.description}</p>
      
      {/* I can add custom interactive elements, charts, demos, etc. */}
      <div className="custom-element">
        {/* Your unique content here */}
      </div>
      
      <Button>Live Demo</Button>
      <Button secondary>View Code</Button>
    </ModalContainer>
  );
};

export default MyProjectModalContent;
```

### 5. **Register in Project Index**
I update `index.js`:

```javascript
import MyProject from './MyProject';
import MyProjectModalContent from './MyProject/ModalContent';

export const projectConfigs = [
  {
    id: 'delfthyperloop',
    component: DelfHyperloop,
    modalContent: DelfHyperloopModalContent,
    color: '#20cc8a',
    showInList: true,
    order: 1
  },
  {
    id: 'myproject',
    component: MyProject,
    modalContent: MyProjectModalContent,
    color: '#yourcolor',
    showInList: true,
    order: 2
  }
];
```

## 🌟 **Customization Possibilities**

### **Unique Layouts**
- Custom grid layouts
- Different image arrangements
- Special typography
- Interactive elements

### **Interactive Features**
- Embedded demos
- Interactive charts
- Video content
- Custom animations
- Hover effects

### **Special Components**
- Progress bars
- Skill indicators
- Timeline components
- Custom buttons
- Unique modals

### **Styling**
- Project-specific themes
- Custom color schemes
- Unique animations
- Responsive behaviors

## 🔧 **i18n Integration**

Each project manages its own translations:

```javascript
// In my project component
import myprojectTranslations from './i18n';

const MyProject = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const translations = myprojectTranslations[currentLanguage] || myprojectTranslations.en;
  
  return (
    <div>
      <h3>{translations.title}</h3>
      <p>{translations.description}</p>
    </div>
  );
};
```

**Benefits of co-located i18n:**
- **Self-contained**: Each project has everything it needs
- **Easy maintenance**: I update translations in the project directory
- **No namespace conflicts**: Each project has its own translation keys
- **Better organization**: Related files stay together
- **Easier collaboration**: Collaborators and I can work on projects independently

## ✨ **Benefits of This Approach**

- **Maximum Customizability**: Each project can be completely unique
- **Reusable Components**: I share common elements between projects
- **Interactive Elements**: I add demos, charts, videos, etc.
- **Self-contained**: Each project has its own i18n, styles, and components
- **Easy Maintenance**: I update project info in one place
- **Scalable**: It's easy for me to add new projects and features
- **Type Safe**: Full React component benefits
- **Performance**: I only load what I need

## 📱 **Usage in Components**

My Work section automatically:
- Renders project components
- Handles modal opening/closing
- Manages project state
- Provides a consistent layout

My project components just focus on their unique content and styling!
