import React from 'react';
import './Joke.scss'
const Joke = props => {
console.log("TCL: Joke props", props)
  return (
    <div>
      <h4>{props.joke.text}</h4>
     
    </div>
  );
};

export default Joke;
