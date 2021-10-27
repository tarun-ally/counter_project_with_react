import React, { Component } from 'react';
import Counters from './components/counters';

import NavBar from './components/navbar';
import './App.css';

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0   },
      { id: 4, value: 0 }
    ],
  };

handleIncrement = counter => {
    const counters = [...this.state.counters];
// counters[0].value++;
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log('tarun',counter);
    this.setState({counters });
};

  handleReset =() => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }

  handleDelete = (counterId) => {
    // console.log("hee", counterId);
    const counters = this.state.counters.filter((c) => c.id != counterId);

    this.setState({ counters });
  };

  handleDecrement =(counter) =>{
      const counters = [...this.state.counters];
  // counters[0].value++;
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      if( counters[index].value>0){
        counters[index].value--;
        this.setState({counters });

      }
      // console.log('tarun',counter);

  }

  render() { 
    return(
      <React.Fragment>

      <NavBar totalCounters={this.state.counters.filter(c =>c.value>0).length}/>
      <main className="container">
      <Counters 
      counters ={this.state.counters}
      onReset={this.handleReset}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}

      />

      </main>
      </React.Fragment>
    )
}
}
 
export default App;