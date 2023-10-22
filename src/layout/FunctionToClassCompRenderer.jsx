import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class FunctionToClassCompRenderer extends Component {
  constructor() {
    super();
    this.state = {
      showClassBasedComponent: false,
    };
  }
  render() {
    let { FunctionBasedComponent, ClassBasedComponent, videoTitle } =
      this.props;
    return (
      <div>
        {videoTitle && <h1>{videoTitle}</h1>}
        {this.state.showClassBasedComponent ? (
          <ClassComponent ClassBasedComponent={ClassBasedComponent} />
        ) : (
          <FunctionComponent FunctionBasedComponent={FunctionBasedComponent} />
        )}
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                showClassBasedComponent: !prevState.showClassBasedComponent,
              };
            });
          }}
        >
          Switch To {this.state.showClassBasedComponent ? "Class" : "Function"}{" "}
          Component?
        </button>
        <div style={{
          display:"flex",
          margin:"3rem",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

class ClassComponent extends Component {
    render() {
        return (
            <>
              {this.props.ClassBasedComponent}
            </>
        )
    }
}

class FunctionComponent extends Component {
    render() {
        return (
            <>
              {this.props.FunctionBasedComponent}
            </>
        ) 
    }
}
