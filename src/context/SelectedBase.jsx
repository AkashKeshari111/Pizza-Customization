// SelectedBaseContext.js
import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

// Create a context called SelectedBaseContext
const SelectedBaseContext = createContext();

// Define a custom hook useSelectedBase to access the context
export const useSelectedBase = () => {
  return useContext(SelectedBaseContext);
};

// Create a provider component for the context
export const SelectedBaseProvider = ({ children }) => {
  // Define state variables for managing pizza customization
  const [selectedBase, setSelectedBase] = useState(false);
  const [chooseBase, setChooseBase] = useState(null);
  const [toppings, setToppings] = useState([]);
  const [displayFinalPizza, setDisplayFinalPizza] = useState(false);
  
  // Use Chakra UI's useToast to display messages
  const toast = useToast();

  // Handler function to cancel pizza customization
  const handleCancelPizza = () => {
    setChooseBase(null);
    setToppings([]);
    setSelectedBase(false);
  };

  // Handler function to serve the pizza
  const handleServePizza = () => {
    if (selectedBase && toppings.length > 2) {
      setDisplayFinalPizza(true);
    } else {
      // Display a toast message if ingredients are not selected properly
      toast({
        title: "Select Ingredients",
        description: "Please select at least 3 toppings before serving!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Handler function to create a new pizza
  const handleNewPizza = () => {
    handleCancelPizza();
    setDisplayFinalPizza(false);
  };

  return (
    // Provide the context values and functions to child components
    <SelectedBaseContext.Provider
      value={{
        selectedBase,
        setSelectedBase,
        chooseBase,
        setChooseBase,
        toppings,
        setToppings,
        displayFinalPizza,
        setDisplayFinalPizza,
        handleServePizza,
        handleCancelPizza,
        handleNewPizza,
      }}
    >
      {children}
    </SelectedBaseContext.Provider>
  );
};
