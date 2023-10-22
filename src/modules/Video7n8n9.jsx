import { useState } from "react";

import React, { Component } from 'react'
import { FunctionToClassCompRenderer } from "../layout/FunctionToClassCompRenderer";

export default class Video7n8n9 extends Component {
  render() {
    return (
        <FunctionToClassCompRenderer 
            videoTitle={"Constructor Method in Class Components"}
            FunctionBasedComponent={<Video7n8n9Function />}
            ClassBasedComponent={<Video7n8n9Class />}
        />
    )
  }
}

function Video7n8n9Function() {
    const [count,setCount] = useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount((prevCount) => prevCount - 1);
    }


  return (
    <div 
        style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding:"2rem"
        }}
    >
      <button onClick={subtract}>-</button>
      <div 
        style={{
            borderRadius: "50%",
            color: "black",
            backgroundColor: "white",
            border: "2rem solid white"
        }}
      >
        {count}
      </div>
      <button onClick={add}>+</button>
    </div>
  )
}

class Video7n8n9Class extends Component {
    //this is a new way assign state here, came with es6
//   state = {
//     count: 0,
//   };

    //old way, found in most of the databases
    constructor() {
      super();
      this.state = {
        count: 0,
      };

      //when we are not using arrow functions, we need to bind
      //all the class functions that are not arrow functions like this
      //to 'this' of current class
      this.subtract = this.subtract.bind(this);
    }

  subtract() {
    this.setState((prevState) => ({
        count: prevState.count - 1,
      })
    );
  };

  add = () => {
    this.setState((prevState) => ({
        count: prevState.count + 1,
      })
    );
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <button onClick={this.subtract}>-</button>
        <div
          style={{
            borderRadius: "50%",
            color: "black",
            backgroundColor: "white",
            border: "2rem solid white",
          }}
        >
          {this.state.count}
        </div>
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}
