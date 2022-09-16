import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserC } from "./components/context/UserC";
import { UserContextProvider } from "./components/context/UserContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import Status from "./components/Status";


function App() {
  const personName = {
    first: "kushal",
    last: "kothari",
  };
  const nameList = [
    {
      first: "C",
      last: "A",
    },
    {
      first: "M",
      last: "J",
    },
    {
      first: "P",
      last: "P",
    },
  ];
  return (
    <div className="App">
      <Greet name="Kushal" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to abc</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Handle click", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid #000", padding: "1rem" }} />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserC/>
      </UserContextProvider>
    </div>
  );
}

export default App;
