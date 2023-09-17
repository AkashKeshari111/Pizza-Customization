import { Box } from "@chakra-ui/react";
import React from "react";
import PizzaBase from "./PizzaBase";
import ToppingLists from "./ToppingLists";
import { useSelectedBase } from "../../context/SelectedBase";

const Ingredients = () => {
  const { selectedBase } = useSelectedBase();
  return (
    <Box
      //   border="1px solid red"
      w="100%"
      h="100%"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* Pizza Base or Topping List */}
      <Box
        w="90%"
        h="90%"
        //    border="1px solid green"
        position={"relative"}
      >
        {!selectedBase ? (
          // Display the PizzaBase component if no base is selected
          <PizzaBase />
        ) : (
          // Display the ToppingLists component if a base is selected
          <ToppingLists />
        )}
      </Box>
    </Box>
  );
};

export default Ingredients;
