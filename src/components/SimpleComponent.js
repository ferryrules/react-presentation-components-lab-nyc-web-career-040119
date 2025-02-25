import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    let mood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({ mood })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
