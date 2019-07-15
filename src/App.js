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
      <Item title={this.state.items[0].title} description={this.state.items[0].description} />
    );
  }
}

export default App;
