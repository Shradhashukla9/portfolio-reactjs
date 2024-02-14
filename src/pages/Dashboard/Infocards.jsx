import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../chakra/CustomCard";

const Infocards = ({ imgUrl, text, tagText, inverted }) => {
    return (
      <CustomCard
        bgColor={inverted ?  "#5F00D9" : "white"}
        bgImage={imgUrl}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Tag
          color={inverted ? " #5F00D9": "white"}
          bg={inverted ? "white" : "#5F00D9"}
          borderRadius="full"
        >
          {tagText}
        </Tag>
        <Text
          mt="4"
          fontWeight="medium"
          textStyle="h5"
          color={inverted ? "white" : "black.80"}
        >
          {text}
        </Text>
      </CustomCard>
    );
  };



export default Infocards
