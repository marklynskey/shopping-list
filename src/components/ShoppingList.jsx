import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import AddItem from "./AddItem";
import BudgetBox from "./BudgetBox";
import Items from "./Items";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState(parseFloat(0).toFixed(2));

  const addItem = (name, price, quantity) => {
    name &&
      price &&
      quantity &&
      setItems([{ name, price, quantity }, ...items]);
  };

  const removeItem = (indexToRemove) =>
    setItems(items.filter((_, index) => index !== indexToRemove));

  const total = items
    .map(({ price, quantity }) => price * quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0)
    .toFixed(2);

  return (
    <Stack spacing={6}>
      <BudgetBox
        budget={budget}
        left={(budget - total).toFixed(2)}
        setBudgetHandler={setBudget}
        total={total}
      />
      <AddItem addItemHandler={addItem} />
      <Items items={items} removeItemHandler={removeItem} />
    </Stack>
  );
};

export default ShoppingList;
