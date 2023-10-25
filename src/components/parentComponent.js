import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("Evans");
  const [lastName, setLastName] = useState("Kurgat");
// console.log(firstName, lastName)
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    
  }

//   console.log(handleFirstNameChange)

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

//   console.log(handleLastNameChange)

  return (
    <>
    <Form
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
    />
     <DisplayData firstName={firstName} lastName={lastName} />
  </>
  );
}

export default ParentComponent;