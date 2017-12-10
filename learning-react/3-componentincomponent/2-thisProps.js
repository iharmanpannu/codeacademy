// this.props
// Previously, you learned one way that components can interact: a component can render 
// another component.

// In this lesson, you will learn another way that components can interact: a component 
// can pass information to another component.

// Information that gets passed from one component to another is known as "props."
// Access a Component's props
// Every component has something called props.

// A component's props is an object. It holds information about that component.

// To see a component's props object, you use the expression this.props. Here's an example of 
// this.props being used inside of a render method:

render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
// Most of the information in this.props is pretty useless! But some of it is extremely important, 
// as you'll see.

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2> {this.stringProps} </h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer />, document.getElementById('app'));