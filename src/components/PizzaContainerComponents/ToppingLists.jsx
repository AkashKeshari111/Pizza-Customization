import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Topping from "./Topping";
import ButtonPizza from "./ButtonPizza";

const ToppingLists = ({ onDrop }) => {
  const toppingIngredients = [
    { name: "MUSHROOM", type: "mushroom-topping", img: "mushroom.png" },
    { name: "TOMATO", type: "tomato-topping", img: "tomato.png" },
    { name: "OLIVE", type: "olive-topping", img: "olive.png" },
  ];
  return (
    <Box position={"absolute"} mt={"50px"}>
      <Text textAlign={"initial"} fontSize={30} fontFamily={"monospace"}>
        Select Toppings
      </Text>
      <Box mt={5}>
        <SimpleGrid columns={2} spacing={5}>
          {toppingIngredients?.map((topping) => (
            <Topping
              key={topping.type}
              name={topping.name}
              type={topping.type}
              img={topping.img}
              onDrop={onDrop}
            />
          ))}
        </SimpleGrid>
      </Box>

      <ButtonPizza />
    </Box>
  );
};

export default ToppingLists;
