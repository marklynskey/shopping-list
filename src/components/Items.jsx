import { Stack } from "@chakra-ui/react";
import Item from "./Item";

const Items = ({ items, removeItemHandler }) => (
  <Stack spacing={2}>
    {items.map(({ name, price, quantity }, index) => (
      <Item
        key={`${name}-${index}`}
        index={index}
        name={name}
        price={price}
        removeItemHandler={removeItemHandler}
        quantity={quantity}
      />
    ))}
  </Stack>
);

export default Items;
