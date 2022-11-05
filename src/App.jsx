import { createGlobalStyle } from "styled-components";
import { Menu } from "./components/menu/menu";

function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
box-sizing: border-box;
text-decoration: none;
}

html {
font-size: 62.5%;
background-color: theme.background;
color: theme.color; 
}

body {
  font-family: 'Montserrat', sans-serif;
}

a {
  color: black;
}

ol, ul {
list-style: none;
}
`;

export default App;
