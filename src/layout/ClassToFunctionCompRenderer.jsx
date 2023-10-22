import React, { Component } from 'react'

export class ClassToFunctionCompRenderer extends Component {

    constructor() {
        super()
        this.state ={
            showClassBasedComponent: false
        }
    }
  render() {

    let { FunctionBasedComponent, ClassBasedComponent} = this.props
    return (
      <div>
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
