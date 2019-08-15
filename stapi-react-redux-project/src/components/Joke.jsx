import React from 'react';

const Joke = props => {
console.log("TCL: Joke props", props)
  return (
    <div>
      <h4>{props.joke.text}</h4>
     
    </div>
  );
};

export default Joke;
