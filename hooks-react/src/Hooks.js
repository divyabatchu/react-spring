import React, { useState } from 'react';

function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
function handleClick(){
  setCount(count +1);
  console.log(count)
}

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>

        Click me
      </button>
    </div>
  );
}

export default Hooks;