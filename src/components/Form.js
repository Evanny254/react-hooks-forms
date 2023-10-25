import React from "react";

function Form(props) {
  return (
    <form>
      <input
          id= '1'
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        id= '2'
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit" onClick={()=> alert(" Submitted Successfully")}>Submit</button>
    </form>
  );
}

export default Form;