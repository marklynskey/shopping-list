import { Flex, Heading, Select } from "@chakra-ui/react";

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
      padding={6}
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
    >
      <Heading size="md">Weekly budget:</Heading>
      <Select w={40}>{generateOptions()}</Select>
    </Flex>
  );
};

export default BudgetBox;
