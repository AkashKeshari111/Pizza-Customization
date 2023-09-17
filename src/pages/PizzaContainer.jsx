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
      flexDir={{base:"column",lg:"row"}} // Flex direction based on screen size
    >
      <Box w="50%" h="100%">
        {/* Display the PizzaModel component  */}
        <PizzaModel />
      </Box>
      <Box w="50%" h="100%">
        {/* Display the Ingredients component  */}
        <Ingredients />
      </Box>
    </Box>
  );
};

export default PizzaContainer;
