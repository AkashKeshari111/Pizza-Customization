// SelectedBaseContext.js
import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

const SelectedBaseContext = createContext();

export const useSelectedBase = () => {
  return useContext(SelectedBaseContext);
};

export const SelectedBaseProvider = ({ children }) => {
  const [selectedBase, setSelectedBase] = useState(false);
  const [chooseBase, setChooseBase] = useState(null);
  const [toppings, setToppings] = useState([]);
  const [displayFinalPizza, setDisplayFinalPizza] = useState(false);
  const toast = useToast();


  const [toppingIngredients,setToppingIngredients] = useState([
    { id:1,name: "MUSHROOM", type: "mushroom-topping", img: "mushroom.png" },
    { id:2,name: "TOMATO", type: "tomato-topping", img: "tomato.png" },
    {id:3, name: "OLIVE", type: "olive-topping", img: "olive.png" },
  ]);





  const handleCancelPizza = () => {
    setChooseBase(null);
    setToppings([]);
    setSelectedBase(false);
  };

  const handleServePizza = () => {
    if (selectedBase && toppings.length > 2) {
      setDisplayFinalPizza(true);
    } else {
      toast({
        title: "Select Ingredients",
        description: "Please select at least 3 toppings before serving!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleNewPizza = () => {
    handleCancelPizza();
    setDisplayFinalPizza(false);
  };

  return (
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
        toppingIngredients,
        setToppingIngredients,
      }}
    >
      {children}
    </SelectedBaseContext.Provider>
  );
};
