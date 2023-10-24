import React, { Component, useEffect, useState } from 'react'
import { FunctionToClassCompRenderer } from '../layout/FunctionToClassCompRenderer';

export default class Video14 extends Component {
  render() {
    return (
      <FunctionToClassCompRenderer
        videoTitle={"ComponentDidUpdate() - Challenge 5 - Preventing Infinite Loops"}
        FunctionBasedComponent={<Video14Function />}
        ClassBasedComponent={<Video14Class />}
      />
    );
  }
}


function Video14Function() {
  const [character, setCharacter] = useState({});
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetchStarWarsCharacter(count)
  }, [count]);

  const fetchStarWarsCharacter = async (count) => {
     await fetch(`https://swapi.dev/api/people/${count}`)
            .then((res) => res.json())
            .then((data) => setCharacter(data));
  }

  const subtract = () => {
    if(count > 1) setCount(prevCount => prevCount - 1 )
  }

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <button onClick={subtract}>-</button>
        <div
          style={{
            borderRadius: "50%",
            color: "black",
            backgroundColor: "white",
            border: "2rem solid white",
          }}
        >
          {count}
        </div>
        <button onClick={add}>+</button>
      </div>
      <div
        style={{
          margin: "2rem",
          fontSize: "3rem",
        }}
      >
        Hello {character.name}
      </div>
    </>
  );
}

class Video14Class extends Component {
  state = {
    count: 1,
    character: {},
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchStarWarsCharacter(this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.fetchStarWarsCharacter(this.state.count);
    }
  }

  fetchStarWarsCharacter = async (count) => {
    await fetch(`https://swapi.dev/api/people/${count}`)
            .then((res) => res.json())
            .then((data) => this.setState({ character: data }));
  };

  subtract = () => {
    if(this.state.count > 1 ) this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    });
  };

  add = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  render() {
    console.log("render");
    return (
      <>
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
        <div
          style={{
            margin: "2rem",
            fontSize: "3rem",
          }}
        >
          Hello {this.state.character.name}
        </div>
      </>
    );
  }
}