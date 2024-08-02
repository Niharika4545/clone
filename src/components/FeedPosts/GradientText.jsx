import { Text } from "@chakra-ui/react";

const GradientText = ({ children,fontWeight, fontSize,hover,cursor  }) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      bgGradient="linear(to-r, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
      bgClip="text"
      _hover={hover}
      cursor={cursor}
    >
      {children}
    </Text>
  );
};

export default GradientText;
