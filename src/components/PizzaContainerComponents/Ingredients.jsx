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
      {/* Pizza Base */}

      <Box
        w="90%"
        h="90%"
        //    border="1px solid green"
        position={"relative"}
      >
        {!selectedBase ? (
          <PizzaBase />
        ) : (
          // Topping List
          <ToppingLists />
        )}
      </Box>
    </Box>
  );
};

export default Ingredients;
