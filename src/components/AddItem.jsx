import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const AddItem = ({ addItemHandler }) => {
  const [name, setName] = useState("");
  const onNameChange = (event) => setName(event.target.value);

  const [price, setPrice] = useState("");
  const onPriceChange = (event) => setPrice(event.target.value);

  const [quantity, setQuantity] = useState("1");
  const onQuantityChange = (event) => setQuantity(event.target.value);

  return (
    <Stack spacing={2}>
      <Flex alignItems="flex-end" justifyContent="stretch" gap={2}>
        <FormControl>
          <FormLabel>Item</FormLabel>
          <Input value={name} onChange={onNameChange} />
        </FormControl>
        <FormControl width="50%">
          <FormLabel>Price</FormLabel>
          <Input type="number" value={price} onChange={onPriceChange} />
        </FormControl>
        <FormControl width="50%">
          <FormLabel>Quantity</FormLabel>
          <Input type="number" value={quantity} onChange={onQuantityChange} />
        </FormControl>
      </Flex>
      <Button onClick={() => addItemHandler(name, price, quantity)}>Add</Button>
    </Stack>
  );
};

export default AddItem;
