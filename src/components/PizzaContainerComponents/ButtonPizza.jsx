import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useSelectedBase } from "../../context/SelectedBase";

const ButtonPizza = () => {
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
      <Button
        w="50%"
        onClick={handleCancelPizza}
        bg="#e6c640"
        _hover={{ bg: "#f7eec5" }}
      >
        Cancel Pizza
      </Button>
      <Button
        w="50%"
        onClick={handleServePizza}
        bg="#e6c640"
        _hover={{ bg: "#f7eec5" }}
      >
        Serve Pizza
      </Button>
    </Box>
  );
};

export default ButtonPizza;
