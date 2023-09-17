import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useSelectedBase } from "../../context/SelectedBase";

const ButtonPizza = () => {
  // Access the functions from the context
  const { handleServePizza, handleCancelPizza } = useSelectedBase();

  return (
    <Box
      mt={10}
      w="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      columnGap={5}
    >
      {/* Button to cancel the pizza */}
      <Button
        w="50%"
        onClick={handleCancelPizza} // Call the handleCancelPizza function on click
        bg="#e6c640"
        _hover={{ bg: "#f7eec5" }}
      >
        Cancel Pizza
      </Button>
      {/* Button to serve the pizza */}
      <Button
        w="50%"
        onClick={handleServePizza} // Call the handleServePizza function on click
        bg="#e6c640"
        _hover={{ bg: "#f7eec5" }}
      >
        Serve Pizza
      </Button>
    </Box>
  );
};

export default ButtonPizza;
