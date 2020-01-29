import React from "react";

const Person = props => {
  return (
    <div>
      <p>
        I'm {props.name}, born in {props.country} and I'm{" "}
        {Math.floor(Math.random() * 30)} years old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
