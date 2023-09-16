import { Box } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

const Topping = ({ name, img, onDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TOPPING",
    item: { type: "TOPPING", name, img },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onDrop={onDrop}
      bg="#f5e08e"
      w="250px"
      height="50px"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {name}
    </Box>
  );
};

export default Topping;
