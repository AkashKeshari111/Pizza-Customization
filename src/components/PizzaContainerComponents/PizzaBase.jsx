import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Base from "./Base";

const PizzaBase = () => {
  // Define the available pizza base options
  const baseIngredients = [
    { name: "Thick Base", type: "thick-base", img: "thick.png" },
    { name: "Thin Base", type: "thin-base", img: "thin.png" },
  ];

  return (
    <Box position={"absolute"} mt={"50px"}>
      {/* Display the heading for selecting pizza base */}
      <Text textAlign={"initial"} fontSize={30} fontFamily={"monospace"}>
        Select Pizza Base
      </Text>
      <Box
        display={"flex"}
        mt={2}
        columnGap={5}
      >
        {/* Map through the available pizza base options */}
        {baseIngredients?.map((base) => (
          //single pizza base item
          <Base
            key={base.type}
            name={base.name}
            type={base.type}
            img={base.img}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PizzaBase;
