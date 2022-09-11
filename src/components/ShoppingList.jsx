import { Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
import AddItem from "./AddItem";
import Items from "./Items";

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const addItem = (name, price) => {
    name && price && setItems([...items, { name, price }]);
  };

  const removeItem = (indexToRemove) =>
    setItems(items.filter((_, index) => index !== indexToRemove));

  return (
    <Stack spacing={6}>
      <Heading size="md">Items:</Heading>
      <AddItem addItemHandler={addItem} />
      <Items items={items} removeItemHandler={removeItem} />
    </Stack>
  );
};

export default ShoppingList;
