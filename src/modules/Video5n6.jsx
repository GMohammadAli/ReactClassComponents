import React, { Component, useState } from 'react'
import { FunctionToClassCompRenderer } from '../layout/FunctionToClassCompRenderer';

export default class Video5n6 extends Component {
  render() {
    return (
      <FunctionToClassCompRenderer
        videoTitle={"Declaring & Setting State in Class Components"}
        FunctionBasedComponent={<Video5n6Function />}
        ClassBasedComponent={<Video5n6Class />}
      />
    );
  }
}

function Video5n6Function() {
  const [goOut, setGoOut] = useState(true);

  const toggleGoOut = () => {
    setGoOut(!goOut);
  };

  return (
    <div>
      <h2>Should I Go Out Tonight?</h2>
      <button
        style={{
          borderRadius: "50%",
          margin: "3rem",
          fontSize: "3rem",
          color: "black",
          backgroundColor: "white",
        }}
        onClick={toggleGoOut}
      >
        {goOut ? "Yes" : "No"}
      </button>
    </div>
  );
}

class Video5n6Class extends Component {
  constructor() {
    super();
    this.state = {
      goOut: true,
    };
  }

  toggleGoOut = () => {
    this.setState((prevState) => {
      return {
        goOut: !prevState.goOut,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Should I Go Out Tonight?</h2>
        <button
          style={{
            borderRadius: "50%",
            margin: "3rem",
            fontSize: "3rem",
            color: "black",
            backgroundColor: "white",
          }}
          onClick={this.toggleGoOut}
        >
          {this.state.goOut ? "Yes" : "No"}
        </button>
      </div>
    );
  }
}

