import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Joke from './Joke';

const JokeList = props => {
console.log("TCL: JokeList props", props)
  return (
    <>
      <h1>Cheesy Dad Joke</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height='15' width="100" />
        ) : (
          'Have a Laugh on Dad'
        )}
      </button>
      {props.jokes &&
        props.jokes.map(res => <Joke key={res} joke={res} />)}
    </>
  );
};

const mapStateToProps = state => {
console.log("TCL: state", state)
  return {
    isLoading: state.isLoading,
    jokes: state.jokes
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(JokeList);