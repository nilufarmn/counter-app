import React, { Component } from 'react';
import Navbar from './component/NavBar';
import Counters from './component/counters';
import './App.css';
class App extends Component {
  state = {
    counters: [
        { id:1 , value:4 },
        { id:2 , value:0 }, 
        { id:3 , value:0 },
        { id:4 , value:0 } 
    ]
};
handleDelete = counterId =>
{
    const counters = this.state.counters.filter(c =>c.id !==counterId);
    this.setState({counters});
};
handleReset = () => {
const counters = this.state.counters.map(c => {c.value=0;return c;});
this.setState({counters});
};
handleIncreament = counter => {
    const counters=[... this.state.counters];
    const index=counters.indexOf(counter)
counters[index]={...counter};
counters[index].value++;
this.setState({counters});
};
  render() {
  return (
    <React.Fragment>
<Navbar />
<main className="container">
<Counters />

</main>
</React.Fragment>
  );

}
}

export default App;
