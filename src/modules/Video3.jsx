import React, { Component } from "react";
import { FunctionToClassCompRenderer } from "../layout/FunctionToClassCompRenderer";

export default class Video3 extends Component {
  render() {
    return (
      <>
        <FunctionToClassCompRenderer
          videoTitle={"Intro to Class Components"}
          ClassBasedComponent={<Video3Class />}
          FunctionBasedComponent={<Video3Function />}
        />
      </>
    );
  }
}
function Video3Function() {
  return (
    <>
      <h1>Functional Component</h1>
    </>
  );
}

class Video3Class extends Component {
  render() {
    //render is compulsory in class components
    //props is automatically gets added to the object that creates this class
    //and can be accessed using this.props
    return (
      <>
        <h1>Class Component</h1>
      </>
    );
  }
}
