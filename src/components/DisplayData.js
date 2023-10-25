import React from "react";

function DisplayData(props) {
  return (
    <div>
        <ol>
        <h1>{props.firstName}</h1>
        <h1>{props.lastName}</h1>
        </ol>   
    </div>
  );
}

export default DisplayData;