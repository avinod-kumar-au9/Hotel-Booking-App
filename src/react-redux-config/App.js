import React from "react";
import { connect } from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 10,
    };
  }

  //1st
  increaseCounter = () => {
    this.props.dispatch({
      type: "INC_COUNTER",
      payload: 2,
    });
  };

  //2nd
  decreaseCounter = () => {
    this.props.dispatch({
      type: "DEC_COUNTER",
      payload: 1,
    });
  };
  increasevalue = () => {
    this.props.dispatch({
      type: "INC_VALUE",
      payload: 1,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>React Redux</h3>
        <label>This is component's state {this.state.counter}</label> <br />
        <button onClick={this.increaseCounter}>Increment</button>
        <button onClick={this.decreaseCounter}>Decrement</button>
        <button onClick={this.increasevalue}>Valueincrease</button>
        <label> {this.props.counter} </label>
        <label> {this.props.value}value </label>
      </div>
    );
  }
}

// there are 2 things
// 1st the state of the component
// 2nd the state of redux store

const mapStateToProps = (state) => {
  return {
    counter: state.counter,

    value: state.value,
  };
};

// const connect = (mapStateToProps,mapDispatchToProps) => {
//     return function (Component) {

//     }
// }

export default connect(mapStateToProps)(App);
