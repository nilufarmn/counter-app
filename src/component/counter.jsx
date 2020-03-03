import React, { Component } from 'react';
class Counter  extends Component {
    state={
        count:0,
        tags:[]
    };
    renderTags()
    {
        if(this.state.tags.lenght===0) return <p>there are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() { 
        return( 
       
        <React.Fragment>
            {this.state.tags.length===0 && 'please create tags!!!!!'}
        {this.renderTags()}
         </React.Fragment>
            );
    }
}
 
export default Counter;