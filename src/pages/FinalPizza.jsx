import React from "react";
import PizzaModel from "../components/PizzaContainerComponents/PizzaModel";
import { Box, Button } from "@chakra-ui/react";
import { useSelectedBase } from "../context/SelectedBase";

const FinalPizza = () => {
  // Access the handleNewPizza function from the context
  const { handleNewPizza } = useSelectedBase();

  return (
    <Box>
      <Box mt={10}>
        {/* Display the PizzaModel component i.e Final Pizza*/}
        <PizzaModel />
      </Box>

      <Box mt={10}>
        {/* Button to create a new pizza */}
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
