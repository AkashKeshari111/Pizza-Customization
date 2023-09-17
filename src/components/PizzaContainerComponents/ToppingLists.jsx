import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Topping from "./Topping";
import ButtonPizza from "./ButtonPizza";

const ToppingLists = () => {
  // Define an array of topping ingredients with their names, types, and images
  const toppingIngredients = [
    { name: "MUSHROOM", type: "mushroom-topping", img: "mushroom.png", chopped_img: "chopped-mushroom.png" },
    { name: "TOMATO", type: "tomato-topping", img: "tomato.png", chopped_img: "chopped-tomato.png" },
    { name: "OLIVE", type: "olive-topping", img: "olive.png", chopped_img: "chopped-olive.png" },
    { name: "Salt", type: "salt-topping", img: "salt.png", chopped_img: "salt.png" },
    { name: "Sauce", type: "sauce-topping", img: "sauce.png", chopped_img: "sauce.png" },
  ];

  return (
    <Box position={"absolute"} mt={"30px"}>
      {/* Heading for the topping selection */}
      <Heading textAlign={"initial"} fontSize={30} fontFamily={"monospace"} fontWeight={500}>
        Select Toppings
      </Heading>
      <Box mt={5}>
        {/* Display the topping ingredients in a grid */}
        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={5}>
          {toppingIngredients?.map((topping) => (
            // single topping item
            <Topping
              key={topping.type}
              name={topping.name}
              type={topping.type}
              choppedImg={topping.chopped_img} // Pass the chopped image source
              img={topping.img} // Pass the regular image source
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Button to interact with selected toppings */}
      <ButtonPizza />
    </Box>
  );
};

export default ToppingLists;
