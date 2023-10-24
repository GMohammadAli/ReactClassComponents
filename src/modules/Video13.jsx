import React, { Component, useEffect, useState } from 'react'
import { FunctionToClassCompRenderer } from '../layout/FunctionToClassCompRenderer'

export default class Video13 extends Component {
  render() {
    return <FunctionToClassCompRenderer 
            videoTitle={"ComponentDidUpdate() - Challenge 4"}
            FunctionBasedComponent={<Video13Function />}
            ClassBasedComponent={<Video13Class />}
        />
  }
}

function Video13Function() {
    const [ formData, setFormData] = useState({})

    useEffect(() => {
        const localFormData = localStorage.getItem("formData")
        localFormData ? setFormData(JSON.parse(localFormData)) : ''
    },[])

    useEffect(() => {
        const setData = JSON.stringify(formData)
        localStorage.setItem("formData", setData);
        // console.log("Change in Form Data", formData)
    },[formData])

  return (
    <form
      style={{
        margin: "2rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <input
        style={{
          margin: "2rem",
          padding: "1rem",
        }}
        type="text"
        placeholder="Enter Name"
        defaultValue={formData.name}
        onChange={(event) => {
          setFormData((prevState) => {
            return {
              ...prevState,
              name: event.target.value,
            };
          });
        }}
      />
      <input
        style={{
          margin: "2rem",
          padding: "1rem",
        }}
        type="email"
        placeholder="Enter Email"
        defaultValue={formData.email}
        onChange={(event) => {
          setFormData((prevState) => {
            return {
              ...prevState,
              email: event.target.value,
            };
          });
        }}
      />
      <button
        type="button"
        onClick={() => {
          localStorage.setItem("formData", JSON.stringify({}));
          setFormData({})
        }}
      >
        Clear Form
      </button>
    </form>
  );
}

class Video13Class extends Component {
    state = {
        name: "",
        email: "",
    }

    componentDidMount() {
        const localFormData = localStorage.getItem('formDataOfCLass')
        this.setState(JSON.parse(localFormData))
    }

    componentDidUpdate() {
        localStorage.setItem("formDataOfCLass", JSON.stringify(this.state));
    }

  render() {
    return (
      <form
        style={{
          margin: "2rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <input
          style={{
            margin: "2rem",
            padding: "1rem",
          }}
          type="text"
          placeholder="Enter Name"
          defaultValue={this.state.name}
          onChange={(event) => {
            this.setState({
              name: event.target.value,
            });
          }}
        />
        <input
          style={{
            margin: "2rem",
            padding: "1rem",
          }}
          type="email"
          placeholder="Enter Email"
          defaultValue={this.state.email}
          onChange={(event) => {
            this.setState({
              email: event.target.value,
            });
          }}
        />
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("formDataOfCLass", JSON.stringify({}));
            this.setState({
              name: "",
              email: "",
            });
          }}
        >
          Clear Form
        </button>
      </form>
    );
  }
}

