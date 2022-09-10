import { Flex, Select, Text } from "@chakra-ui/react";

const BudgetBox = () => {
  const generateOptions = () => {
    const options = [];
    for (let step = 20; step <= 200; step += 10) {
      options.push(<option key={step}>{step}</option>);
    }

    return options;
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      margin={6}
      padding={6}
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
    >
      <Text as="span">Weekly budget:</Text>
      <Select w={40}>{generateOptions()}</Select>
    </Flex>
  );
};

export default BudgetBox;
