import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

const Topping = ({ name, img, choppedImg }) => {
  // Define a draggable topping using react-dnd
  const [{ isDragging }, drag] = useDrag({
    type: "TOPPING", // Specify the type as "TOPPING"
    item: { type: "TOPPING", name, img }, // Set the item type and data to identify it as a topping
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Box
      style={{ opacity: isDragging ? 0.5 : 1 }}
      w="100px"
      height="100px"
      rounded={"50%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      {/* Display the chopped image of the topping */}
      <Image src={choppedImg} ref={drag} />

      {/* Display the name of the topping */}
      <Text>{name}</Text>
    </Box>
  );
};

export default Topping;
