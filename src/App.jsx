import { Container } from "@chakra-ui/react";
import HeaderNav from "./components/HeaderNav";
import ShoppingList from "./components/ShoppingList";

const App = () => (
  <>
    <HeaderNav />
    <Container
      paddingTop={12}
      paddingBottom={12}
      paddingLeft={6}
      paddingRight={6}
    >
      <ShoppingList />
    </Container>
  </>
);

export default App;
