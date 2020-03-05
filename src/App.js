import React, { Component } from 'react';
import Navbar from './component/NavBar';
import Counters from './component/counters';
import './App.css';
class App extends Component {
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
