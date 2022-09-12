import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "kushal",
    second: "kothari",
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
      <Button handleClick={(event,id)=>{
        console.log("Handle click",event,id)
      }}/>
      <Input value='' handleChange={(event)=>console.log(event)}/>
    </div>
  );
}

export default App;
