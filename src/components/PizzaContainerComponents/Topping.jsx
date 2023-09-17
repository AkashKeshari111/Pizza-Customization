import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

const Topping = ({ name, img,choppedImg}) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TOPPING",
    item: { type: "TOPPING", name, img },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  

  return (
    <Box
     
      style={{ opacity: isDragging ? 0.5 : 1 }}
      // bg="#f5e08e"
      w="100px"
      height="100px"
      rounded={"50%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
    >
   <Image src={choppedImg}  ref={drag}/>
   <Text>{name}</Text>
    </Box>
  );
};

export default Topping;
