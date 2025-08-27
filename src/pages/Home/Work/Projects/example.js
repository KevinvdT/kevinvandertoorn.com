import exampleImage from '../img/example.png'; // You would add your image here

export const example = {
  id: 'example',
  image: exampleImage,
  color: '#ff6b6b',
  
  // Translations for different languages
  translations: {
    en: {
      title: 'Example Project',
      shortDescription: 'This is an example of how to add a new project. Just copy this file, update the content, and add it to the projects array in index.js',
      projectDetails: {
        title: 'Example Project',
        description: "This is a detailed description of your example project. You can write as much as you want here to explain what the project does, how it works, and what you learned from it.",
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        challenges: "Describe the main challenges you faced while building this project and how you solved them.",
        features: [
          'Feature 1: Describe what this feature does',
          'Feature 2: Another cool feature',
          'Feature 3: Something innovative',
          'Feature 4: Technical achievement'
        ],
        liveDemoUrl: 'https://your-demo-url.com',
        codeUrl: 'https://github.com/yourusername/project'
      }
    },
    nl: {
      title: 'Voorbeeld Project',
      shortDescription: 'Dit is een voorbeeld van hoe je een nieuw project toevoegt. Kopieer gewoon dit bestand, update de inhoud en voeg het toe aan de projects array in index.js',
      projectDetails: {
        title: 'Voorbeeld Project',
        description: "Dit is een gedetailleerde beschrijving van je voorbeeldproject. Je kunt hier zoveel schrijven als je wilt om uit te leggen wat het project doet, hoe het werkt en wat je ervan hebt geleerd.",
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        challenges: "Beschrijf de belangrijkste uitdagingen die je tegenkwam bij het bouwen van dit project en hoe je ze hebt opgelost.",
        features: [
          'Functie 1: Beschrijf wat deze functie doet',
          'Functie 2: Nog een coole functie',
          'Functie 3: Iets innovatiefs',
          'Functie 4: Technische prestatie'
        ],
        liveDemoUrl: 'https://your-demo-url.com',
        codeUrl: 'https://github.com/yourusername/project'
      }
    },
    de: {
      title: 'Beispielprojekt',
      shortDescription: 'Dies ist ein Beispiel dafür, wie Sie ein neues Projekt hinzufügen. Kopieren Sie einfach diese Datei, aktualisieren Sie den Inhalt und fügen Sie sie zum Projekte-Array in index.js hinzu',
      projectDetails: {
        title: 'Beispielprojekt',
        description: "Dies ist eine detaillierte Beschreibung Ihres Beispielprojekts. Sie können hier so viel schreiben, wie Sie möchten, um zu erklären, was das Projekt macht, wie es funktioniert und was Sie daraus gelernt haben.",
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        challenges: "Beschreiben Sie die wichtigsten Herausforderungen, denen Sie beim Aufbau dieses Projekts begegnet sind und wie Sie sie gelöst haben.",
        features: [
          'Funktion 1: Beschreiben Sie, was diese Funktion macht',
          'Funktion 2: Eine weitere coole Funktion',
          'Funktion 3: Etwas Innovatives',
          'Funktion 4: Technische Leistung'
        ],
        liveDemoUrl: 'https://your-demo-url.com',
        codeUrl: 'https://github.com/yourusername/project'
      }
    }
  }
};
