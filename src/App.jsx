import { Container } from "@chakra-ui/react";
import BudgetBox from "./components/BudgetBox";
import HeaderNav from "./components/HeaderNav";
import ShoppingList from "./components/ShoppingList";

const App = () => (
  <>
    <HeaderNav />
    <Container p={12}>
      <BudgetBox />
      <ShoppingList />
    </Container>
  </>
);

export default App;
