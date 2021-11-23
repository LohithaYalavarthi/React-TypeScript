import "./App.css";
import { useState } from "react";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import React from "react";
import Input from "./components/Input";
import { setConstantValue } from "typescript";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Private } from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumbers from "./components/restriction/RandomNumbers";
import Toast from "./components/templateLiterals/Toast";
import CustomButton from "./components/html/CustomButton";
import Text from "./components/polymorphic/Text";

function App() {
  const [value, setValue] = useState("");
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log(`event.target`, event.target, id);
  };
  return (
    <div className="App">
      <Greet name="lohitha" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo Dicpario!</Heading>
      </Oscar>
      <Input
        handleInputChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <Button handleClick={(event, id) => handleClick(event, id)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => {
          console.log(item);
        }}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => {
          console.log(item);
        }}
      />
      <RandomNumbers value={10} isPositive />
      <Toast position="left-center" />
      <CustomButton
        variant="primary"
        onClick={() => {
          console.log("Primary Button clicked");
        }}
      >
        Primary Button
      </CustomButton>
      <Text
        size="lg"
        as="h1"
        onclick={(e) => {
          console.log(`w`, e);
        }}
      >
        Heading
      </Text>
      <Text
        size="sm"
        onclick={(e) => {
          console.log(`event`, e);
        }}
        color="secondary"
        as="label"
      >
        Label
      </Text>
    </div>
  );
}

export default App;
