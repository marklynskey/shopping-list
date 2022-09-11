import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const BudgetBox = ({ budget: masterBudget, left, setBudgetHandler, total }) => {
  const [budget, setBudget] = useState("");
  const onBudgetChange = (event) => setBudget(event.target.value);

  const [editMode, setEditMode] = useState(true);

  const inputRef = useRef(null);

  const percentSpent = (total / masterBudget) * 100;

  return (
    <Stack spacing={3} p={3} bgColor="gray.50" borderRadius="lg">
      {editMode && (
        <>
          <FormControl>
            <FormLabel>Budget</FormLabel>
            <Input
              type="number"
              value={budget}
              onChange={onBudgetChange}
              ref={inputRef}
              bgColor="white"
            />
          </FormControl>
          <Button
            onClick={() => {
              setBudgetHandler(
                parseFloat(budget === "" ? 0 : budget).toFixed(2)
              );
              setEditMode(false);
            }}
          >
            Set
          </Button>
          <Button
            onClick={() => {
              setBudget(masterBudget);
              setEditMode(false);
            }}
          >
            Cancel
          </Button>
        </>
      )}
      {!editMode && (
        <>
          <Flex gap={3}>
            <Box bgColor="white" p={3} borderRadius="lg" flexGrow={1}>
              <Text as="h2">Budget</Text>
              <Text fontSize="3xl">${masterBudget}</Text>
            </Box>
            <Box
              bgColor="white"
              p={3}
              borderRadius="lg"
              flexGrow={1}
              outline={left < 0 ? "solid 4px" : null}
              outlineColor="pink.200"
            >
              <Text as="h2">Left</Text>
              <Text fontSize="3xl">${left}</Text>
            </Box>
          </Flex>
          <Progress
            value={percentSpent}
            colorScheme={percentSpent > 100 ? "pink" : "teal"}
            borderRadius="lg"
          />
          <Button
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </Button>
        </>
      )}
    </Stack>
  );
};

export default BudgetBox;
