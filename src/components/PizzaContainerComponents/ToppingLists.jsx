import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Topping from "./Topping";
import ButtonPizza from "./ButtonPizza";

const ToppingLists = () => {
  const toppingIngredients = [
    { name: "MUSHROOM", type: "mushroom-topping", img: "mushroom.png",chopped_img:"chopped-mushroom.png" },
    { name: "TOMATO", type: "tomato-topping", img: "tomato.png",chopped_img:"chopped-tomato.png" },
    { name: "OLIVE", type: "olive-topping", img: "olive.png" ,chopped_img:"chopped-olive.png"},
    { name: "Salt", type: "salt-topping", img: "salt.png" ,chopped_img:"salt.png"},
    { name: "Sauce", type: "sauce-topping", img: "sauce.png" ,chopped_img:"sauce.png"},


  ];
  return (
    <Box position={"absolute"} mt={"30px"}>
      <Text textAlign={"initial"} fontSize={30} fontFamily={"monospace"}>
        Select Toppings
      </Text>
      <Box mt={5}>
        <SimpleGrid columns={{base:2,lg:4}} spacing={5}>
          {toppingIngredients?.map((topping) => (
            <Topping
              key={topping.type}
              name={topping.name}
              type={topping.type}
              choppedImg={topping.chopped_img}
              img={topping.img}
            />
          ))}
        </SimpleGrid>
      </Box>

      <ButtonPizza />
    </Box>
  );
};

export default ToppingLists;
