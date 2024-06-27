import React, { useState } from "react";

const Name = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(25);

  function increament(age) {
    setAge((age) => age + 1);
  }

  function decrement(age) {
    setAge((age) => age + 1);
  }

  return (
    <div>
      My name is {name}. I am {age} years old.
      <br></br>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={increament}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Name;
