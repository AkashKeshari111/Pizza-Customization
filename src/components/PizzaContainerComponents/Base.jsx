import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

const Base = ({ name, img, onDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "PIZZA_BASE",
    item: { type: "PIZZA_BASE", name, img },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      opacity={isDragging ? 0.5 : 1}
      onDrop={onDrop}
      w="20%"
      h="20%"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      //   border="1px solid red"
    >
      <Image src={img} w="80%" h="80%" />
      <Text>{name}</Text>
    </Box>
  );
};

export default Base;
