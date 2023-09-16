import { Box } from "@chakra-ui/react";
import React from "react";
import PizzaModel from "../components/PizzaContainerComponents/PizzaModel";
import Ingredients from "../components/PizzaContainerComponents/Ingredients";

const PizzaContainer = () => {
  return (
    <Box
      w="100%"
      h="70vh"
      //   border="1px solid red"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="50%" h="100%">
        <PizzaModel />
      </Box>
      <Box w="50%" h="100%">
        <Ingredients />
      </Box>
    </Box>
  );
};

export default PizzaContainer;
