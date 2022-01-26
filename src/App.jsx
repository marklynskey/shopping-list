import { Container } from "@chakra-ui/react";
import BudgetBox from "./components/BudgetBox";
import HeaderNav from "./components/HeaderNav";

const App = () => (
  <>
    <HeaderNav />
    <Container>
      <BudgetBox />
    </Container>
  </>
);

export default App;
