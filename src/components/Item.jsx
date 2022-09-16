import { Button, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TextCell = ({ children, width }) => (
  <Text flexGrow={1} mr={3} overflow="hidden" width={width} whiteSpace="nowrap">
    {children}
  </Text>
);

const Item = ({ index, name, price, removeItemHandler, quantity }) => (
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
    <TextCell width="100%">{name}</TextCell>
    <TextCell width="50%">${price}</TextCell>
    <TextCell width="25%">x{quantity}</TextCell>
    <Button
      flexBasis="auto"
      onClick={() => removeItemHandler(index)}
      aria-label="Remove"
      title="Remove"
    >
      <DeleteIcon />
    </Button>
  </Flex>
);

export default Item;
