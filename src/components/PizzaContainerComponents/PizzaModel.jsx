import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useDrop } from "react-dnd";
import { useSelectedBase } from "../../context/SelectedBase";

const PizzaModel = () => {
  const {
    setSelectedBase,
    chooseBase,
    setChooseBase,
    toppings,
    setToppings,
    displayFinalPizza,
  } = useSelectedBase();

  const handleBaseDrop = (item) => {
    setChooseBase(item);
    setSelectedBase(true);
  };

  const handleToppingDrop = (item) => {
    setToppings([...toppings, item]);
  };

  const [{ isOver }, drop] = useDrop({
    accept: ["PIZZA_BASE", "TOPPING"], // Specify accepted types for drops
    drop: (item) => {
      // Handle the dropped item here and update the pizza model
      if (item.type === "PIZZA_BASE") {
        handleBaseDrop(item);
      } else if (item.type === "TOPPING") {
        handleToppingDrop(item);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const imageStyle = {
    position: "absolute",
    transition: "transform 0.8s ease-in-out", 
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      position="relative"
    >
      <Box
        ref={drop}
        w="300px"
        h="300px"
        bg={displayFinalPizza ? "#b68b60" : "lightGray"}
        border={displayFinalPizza ? "20px solid #b68b60" : "20px solid #b9bcbf"}
        rounded="full"
        position="relative"
        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
      >
        {/* Ingredients layers */}

        {chooseBase && (
          <Image
            src={chooseBase.img}
            style={imageStyle}
            boxSize="100%"
            top="0"
            left="0"
          />
        )}
        {toppings.map((topping, index) => (
          <Image
            key={index}
            src={topping.img}
            style={imageStyle}
            boxSize="100%"
            top="0"
            left="0"
          />
        ))}

        {/* Display the "cut.png" image when the final pizza is served */}
        {displayFinalPizza && (
          <Image
            src={"cut.png"}
            style={imageStyle}
            boxSize="100%"
            top="0"
            left="0"
          />
        )}
      </Box>
    </Box>
  );
};

export default PizzaModel;
