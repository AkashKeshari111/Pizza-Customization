import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Base from "./Base";

const PizzaBase = ({ onDrop }) => {
  const baseIngredients = [
    { name: "Thick Base", type: "thick-base", img: "thick.png" },
    { name: "Thin Base", type: "thin-base", img: "thin.png" },
  ];

  return (
    <Box position={"absolute"} mt={"50px"}>
      <Text textAlign={"initial"} fontSize={30} fontFamily={"monospace"}>
        Select Pizza Base
      </Text>
      <Box
        display={"flex"}
        mt={2}
        //   border="1px solid red"
        columnGap={5}
      >
        {baseIngredients?.map((base) => (
          <Base
            key={base.type}
            name={base.name}
            type={base.type}
            img={base.img}
            onDrop={onDrop}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PizzaBase;
