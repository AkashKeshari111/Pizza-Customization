import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Headers = () => {
  // Styles for the header text
  const textStyle = {
    fontSize: 70,
    fontWeight: "bold",
    textShadow:
      "2px 2px 8px rgba(255, 0, 0, 0.8), -2px -2px 8px rgba(0, 0, 255, 0.8)",
    color: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    // Animation properties
    animation: "myAnim 5s ease 5s 1 normal forwards", // Name, duration, timing function, delay, iteration count, direction, fill mode
    transformOrigin: "50% 50%", // Sets the origin of the transformation
    animationIterationCount: 3, // Number of times the animation should repeat
  };

  // Keyframes for the animation
  const keyframes = {
    "0%, 100%": {
      transform: "translateX(0%)",
    },
    "15%": {
      transform: "translateX(-30px) rotate(6deg)",
    },
    "30%": {
      transform: "translateX(15px) rotate(-6deg)",
    },
    "45%": {
      transform: "translateX(-15px) rotate(3.6deg)",
    },
    "60%": {
      transform: "translateX(9px) rotate(-2.4deg)",
    },
    "75%": {
      transform: "translateX(-6px) rotate(1.2deg)",
    },
  };

  // Name of the animation
  const animationName = "myAnim";

  return (
    <Box
      width="100%"
      h="30vh"
      bg="#E6C640"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Dynamically generate keyframes using CSS styles */}
      <style>
        {`@keyframes ${animationName} {
          ${Object.entries(keyframes)
            .map(
              ([key, value]) =>
                `${key} { ${Object.entries(value)
                  .map(([prop, val]) => `${prop}: ${val};`)
                  .join(" ")} }`
            )
            .join(" ")}
        }`}
      </style>
      <Text style={textStyle}>THE PIZZA PALETTE</Text>
    </Box>
  );
};

export default Headers;
