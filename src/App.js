import React, { Component } from 'react';
import './styles/App.scss';
import Items from "./components/Items";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: "Item 1",
          description: "Description item 1"
        },
        {
          id: 2,
          title: "Item 2",
          description: "Description item 2"
        }
      ]
    }
  }

  render() {
    return (
      <Items items={this.state.items} />
    );
  }
}

export default App;
