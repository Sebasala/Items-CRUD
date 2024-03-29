import React, { Component } from 'react';
import './styles/App.scss';
import Items from "./components/Items";
import Input from "./components/Input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Input value={this.state.input} onChange={this.handleChange} />
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
