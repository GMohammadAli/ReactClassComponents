import React, { Component } from "react";
import { ClassToFunctionCompRenderer } from "../layout/ClassToFunctionCompRenderer";

function Video3Function() {

  return (
    <>
      <h1>Functional Component</h1>
    </>
  );
}


class Video3Class extends Component {
  render() {
    return (
      <>
        <h1>Class Component</h1>
      </>
    );
  }
}


export class Video3 extends Component {
  render() {
    return (
      <>
        <ClassToFunctionCompRenderer
          ClassBasedComponent={<Video3Class />} 
          FunctionBasedComponent={<Video3Function />}
        />
      </>
    )
  }
}

export default Video3
