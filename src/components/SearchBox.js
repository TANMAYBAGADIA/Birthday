import React, { Component } from 'react';

export default class SearchBox extends Component {
  state = {
    input: ''
  };
  render() {
    console.log(this.state.input);
    return (
      <div className="search-container">
        <h2 className="searchText">Search Emojis here!</h2>
        <input
          className="emojiInput"
          value={this.state.input}
          onChange={this.onChange}
        />
      </div>
    );
  }
  onChange = ({ target }) => {
    const { value } = target;
    this.setState({
      input: value
    });
    this.props.filterEmoji(value);
  };
}
