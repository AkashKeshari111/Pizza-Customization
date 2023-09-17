import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

const Base = ({ name, img }) => {
  // Define the drag-and-drop properties for the pizza base
  const [{ isDragging }, drag] = useDrag({
    type: "PIZZA_BASE", // Specify the drag type as "PIZZA_BASE"
    item: { type: "PIZZA_BASE", name, img }, // Set the item type and data to identify it as a pizza base
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // Check if the item is currently being dragged
    }),
  });

  return (
    <Box
      ref={drag} // Attach the drag ref to this element
      opacity={isDragging ? 0.5 : 1} // Reduce opacity if the base is being dragged
      w="20%"
      h="20%"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* Display the image of the pizza base */}
      <Image src={img} w="80%" h="80%" />
      {/* Display the name of the pizza base */}
      <Text>{name}</Text>
    </Box>
  );
};

export default Base;
