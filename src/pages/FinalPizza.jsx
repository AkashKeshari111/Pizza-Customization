// FinalPizza.js

import React from "react";
import PizzaModel from "../components/PizzaContainerComponents/PizzaModel";
import { Box, Button } from "@chakra-ui/react";
import { useSelectedBase } from "../context/SelectedBase";

const FinalPizza = () => {
  const { handleNewPizza } = useSelectedBase();
  return (
    <Box>
      <Box mt={10}>
        <PizzaModel />
      </Box>

      <Box mt={10}>
        <Button
          onClick={handleNewPizza}
          bg="#e6c640"
          _hover={{ bg: "#f7eec5" }}
        >
          Make New Pizza
        </Button>
      </Box>
    </Box>
  );
};

export default FinalPizza;
