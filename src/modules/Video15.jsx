import React, { Component, useEffect, useState } from 'react'
import { FunctionToClassCompRenderer } from '../layout/FunctionToClassCompRenderer'

export default class Video15 extends Component {
  render() {
    return <FunctionToClassCompRenderer 
            videoTitle={"ComponentWillUnmount()"}
            FunctionBasedComponent={<Video15Function />}
            ClassBasedComponent={<Video15Class />}
        />
  }
}

function Video15Function() {
  const [ contentWidth, setContentWidth] = useState(window.innerWidth)

  useEffect(() => { //component Did Mount
    // Anything in here is fired on component mount.
    window.addEventListener("resize", watchWidth);
    return () => { //component Will Unmount
      // Anything in here is fired on component unmount.
      window.removeEventListener("resize", watchWidth);
    };
  }, [window.innerWidth]);

  const watchWidth = () => {
    setContentWidth(window.innerWidth)
  }
  return (
    <div>
      <h3>Window Width: {contentWidth}</h3>
    </div>
  );
}

class Video15Class extends Component {
    state = {
        contentWidth : window.innerWidth
    }

    watchWidth = () => {
        this.setState({ contentWidth : window.innerWidth})
    }

    componentDidMount() {
        window.addEventListener("resize", this.watchWidth)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.watchWidth)
    }

  render() {
    return (
      <div>
        <h3>Window Width: {this.state.contentWidth}</h3>
      </div>
    )
  }
}

