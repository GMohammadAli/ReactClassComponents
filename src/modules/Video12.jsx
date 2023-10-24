import React, { Component, useEffect, useState } from 'react'
import { FunctionToClassCompRenderer } from '../layout/FunctionToClassCompRenderer'

export default class Video12 extends Component {
  render() {
    return (
        <FunctionToClassCompRenderer 
            videoTitle={"ComponentDidMount() - Challennge 3"}
            FunctionBasedComponent={<Video12Function />}
            ClassBasedComponent={<Video12Class />}
        />
    )
  }
}

function Video12Function() {
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setCharacter(data))
    },[])


  return <div style={{
    margin:"2rem",
    fontSize: "3rem"
  }}>Hello {character.name}</div>;
}


class Video12Class extends Component {
    state = {
        character: {}
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch("https://swapi.dev/api/people/1")
          .then((res) => res.json())
          .then((data) => {
                this.setState({character: data})
            })
    }

  render() {
    console.log("render")
    return (
      <div
        style={{
          margin: "2rem",
          fontSize: "3rem",
        }}
      >
        Hello {this.state.character.name}
      </div>
    );
  }
}