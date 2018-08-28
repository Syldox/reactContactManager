import React, { Component } from 'react';
import Contact from './components/Contact';
import List from './components/List';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    // const name = 'isma';
    // const email = 'john@gmail.com';
    // const phone = '555-555-5555';

    return (
      <div className="App">
        <Header />

        <div className="container">
          <Contact name="John" email="john@gmail.com" phone="555-555-5555" />
          <Contact
            name="Brahim"
            email="Brahim@gmail.com"
            phone="333-333-3333"
          />
        </div>
      </div>
    );
  }
}

export default App;
