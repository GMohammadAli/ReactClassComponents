import React, { Component, useState } from 'react'
import { FunctionToClassCompRenderer } from '../layout/FunctionToClassCompRenderer'

export default class Video10 extends Component {
  render() {
    return (
        <FunctionToClassCompRenderer 
            videoTitle={"Challenge 2"}
            FunctionBasedComponent={<Video10Function />}
            ClassBasedComponent={<Video10Class />}
        />
    )
  }
}

function Video10Function() {
    const [contact, setContact] = useState({
        name: "John Wick",
        phone: "7892123121",
        email: "johnwick@gmail.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? {
        color: "yellow"
    } : {}

    const onClickFavorite = () => {
      setContact((prevState) => ({
        ...prevState,
        isFavorite: !prevState.isFavorite,
      }));
    };

  return (
    <div
      style={{
        borderRadius: "1rem",
        border: "2px solid",
        margin: "2rem",
        padding: "2rem",
      }}
    >
      <h3>{contact.name}</h3>
      <h3>{contact.phone}</h3>
      <div style={starIcon} onClick={onClickFavorite}>
        {contact.isFavorite ? "Favourited" : "Not Favourite"}
      </div>
      <h3>{contact.email}</h3>
    </div>
  );
}

export class Video10Class extends Component {
    constructor() {
        super()
        this.state = {
          name: "John Wick",
          phone: "7892123121",
          email: "johnwick@gmail.com",
          isFavorite: false,
        };
        this.onClickFavorite = this.onClickFavorite.bind(this)
    }

    onClickFavorite() {
        this.setState(prevState => ({
            isFavorite: !prevState.isFavorite
        }))
    }

  render() {
    let starIcon = this.state.isFavorite
      ? {
          color: "yellow",
        }
      : {};

    return (
      <div
        style={{
          borderRadius: "1rem",
          border: "2px solid",
          margin: "2rem",
          padding: "2rem",
        }}
      >
        <h3>{this.state.name}</h3>
        <h3>{this.state.phone}</h3>
        <div style={starIcon} onClick={this.onClickFavorite}>
          {this.state.isFavorite ? "Favourited" : "Not Favourite"}
        </div>
        <h3>{this.state.email}</h3>
      </div>
    );
  }
}


