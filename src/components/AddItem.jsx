import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

const AddItem = ({ addItemHandler }) => {
  const [name, setName] = useState("");
  const onNameChange = (event) => setName(event.target.value);

  const [price, setPrice] = useState("");
  const onPriceChange = (event) => setPrice(event.target.value);

  return (
    <Flex alignItems="flex-end" gap={2}>
      <FormControl>
        <FormLabel>Item</FormLabel>
        <Input value={name} onChange={onNameChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input type="number" value={price} onChange={onPriceChange} />
      </FormControl>
      <Button onClick={() => addItemHandler(name, price)}>Add</Button>
    </Flex>
  );
};

export default AddItem;
