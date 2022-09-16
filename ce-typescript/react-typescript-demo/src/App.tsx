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
import { DomRef } from "./components/ref/DomRef";
// import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import Status from "./components/Status";
import CounterC from "./components/class/CounterC";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { Text } from "./components/polymorphic/Text";

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
      {/* Type Props */}
      <Greet name="Kushal" messageCount={20} isLoggedIn={true} />
      {/* Object Props */}
      <Person name={personName} />
      {/* Array of Object */}
      <PersonList names={nameList} />
      {/* Advanced Props */}
      <Status status="success" />
      {/* Props as Children */}
      <Heading>Placeholder text</Heading>
      {/* props as Component */}
      <Oscar>
        <Heading>Oscar goes to abc</Heading>
      </Oscar>
      {/* Event Props */}
      <Button
        handleClick={(event, id) => {
          console.log("Handle click", event, id);
        }}
      />
      {/* Input Event */}
      <Input value="" handleChange={(event) => console.log(event)} />
      {/* Style as Props */}
      <Container styles={{ border: "1px solid #000", padding: "1rem" }} />
      {/* useState */}
      <LoggedIn />
      {/* UseState Future Value */}
      <User />
      {/* useReducer */}
      <Counter />
      {/* UseContext */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserC />
      </UserContextProvider>
      {/* ref */}
      <DomRef /> {/* <MutableRef/> */}
      {/*Class Component  */}
      <CounterC message="The Count value is:" />
      {/* Component Props */}
      <Private isLoggedIn={true} component={Profile} />
      {/* generic Props */}
      <List
        items={["Batman", "Superman", "Spiderman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
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
        ]}
        onClick={(item) => console.log(item)}
      />
      {/* Restricting Props */}
      <RandomNumber value={10} isPostive/>
      {/* Template Literals and Exclude */}
      <Toast position="center"/>
      {/* Wrapping HTML Elements */}
      <CustomButton variant='primary' onClick={()=> console.log('Clicked')}>
        Primary Button
      </CustomButton>
      {/* Extracting a Component Props Types */}
      <CustomComponent name="kushal" isLoggedIn/>
      {/* Polymorphic Components */}
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
