import React, { Component } from 'react';
class Counter  extends Component {
    state={
        value:this.props.value
    };
    handleIncreament=()=>
    {
        this.setState({value:this.state.value+1})

    }
    render() { 
    return( 
       
        <React.Fragment>
            <ul>
            <span  className = {this.getBadgeClasses()} >{this.formatCount()}</span>
            <button onClick={this.handleIncreament} className="btn btn-secondary btn-sm">increament</button>
            </ul>
         </React.Fragment>
            );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){

    const {count}=this.state;
        return count === 0 ? "Zero" : count;

    }
}
 
export default Counter;