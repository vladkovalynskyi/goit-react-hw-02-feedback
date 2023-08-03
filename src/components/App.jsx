import { Component } from "react";
import Section from "./Section/Section";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
      <Section
        title = 'Please leave feedback'
        options = {Object.keys(this.state)}
      />
      
      </div>
    );
  };
}
