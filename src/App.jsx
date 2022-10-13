import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { AppComponent } from "./app.styled";

export const App = () => {
  return (
    <AppComponent>
      <Header />
      <Main />
    </AppComponent>
  );
};
