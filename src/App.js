import React, { Component } from 'react';
import './styles/App.scss';
import Item from "./components/Item";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: "Item 1"
        }
      ]
    }
  }

  render() {
    return (
      <Item title={this.state.items[0].title} />
    );
  }
}

export default App;
