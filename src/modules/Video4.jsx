import React, { Component, Fragment } from 'react'
import { FunctionToClassCompRenderer } from '../layout/FunctionToClassCompRenderer'

export default class Video4 extends Component {
  render() {
    return (
      <FunctionToClassCompRenderer 
        videoTitle={"Challenge 1"}
        FunctionBasedComponent={<Video4Function />}
        ClassBasedComponent={<Video4Class />}
      />
    )
  }
}

function Video4Function() {
  return (
    <Fragment>
      <HeaderFunction username={"Ali"} />
      <GreetingFunction />
    </Fragment>
  );
}

function HeaderFunction(props) {
  return (
    <h2>
      <p>Welcome {props.username}</p>
    </h2>
  );
}

function GreetingFunction() {
    const date = new Date().getHours();
    let greeting = "Morning";
    if (date > 12 && date <= 17) {
        greeting = "Afternoon";
    } else if (date > 17) {
        greeting = "Night";
    }
  return (
    <div>
      <h2>Good {greeting} to You, Sir/Madam</h2>
    </div>
  );
}

class Video4Class extends Component {
  render() {
    return (
      <Fragment>
        <Header username={"Ali"} />
        <Greeting />
      </Fragment>
    );
  }
}


class Header extends Component {
  render() {
    return (
      <h2>
        <p>Welcome {this.props.username}</p>
      </h2>
    )
  }
}

class Greeting extends Component {
  render() {
    const date = new Date().getHours()
    let greeting = "Morning"
    if(date > 12 && date <= 17){
        greeting = "Afternoon"
    }else if(date > 17){
        greeting= "Night"
    }
    return (
      <div>
        <h2>Good {greeting} to You, Sir/Madam</h2>
      </div>
    )
  }
}


