import { Button, Flex, Text } from "@chakra-ui/react";

const Item = ({ index, name, price, removeItemHandler }) => (
  <Flex
    alignItems="center"
    pt={3}
    pb={3}
    pl={6}
    pr={6}
    border="1px"
    borderColor="gray.200"
    borderRadius="lg"
    boxShadow="sm"
  >
    <Text flexGrow={1}>{name}</Text>
    <Text flexGrow={1}>{price}</Text>
    <Button flexBasis="auto" onClick={() => removeItemHandler(index)}>
      Remove
    </Button>
  </Flex>
);

export default Item;
