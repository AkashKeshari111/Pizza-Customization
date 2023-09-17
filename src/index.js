// Import required modules and styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import ChakraProvider for Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// Import DndProvider and HTML5Backend for drag-and-drop functionality
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Import your custom context provider
import { SelectedBaseProvider } from './context/SelectedBase';

// Create a root element for React concurrent mode (optional but recommended)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the entire app wrapped in providers
root.render(
  <React.StrictMode>
    {/* Wrap the app in ChakraProvider for Chakra UI styling */}
    <ChakraProvider>
      {/* Wrap the app in SelectedBaseProvider for custom context */}
      <SelectedBaseProvider>
        {/* Wrap the app in DndProvider for drag-and-drop functionality */}
        <DndProvider backend={HTML5Backend}>
          {/* Render the main App component */}
          <App />
        </DndProvider>
      </SelectedBaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();
