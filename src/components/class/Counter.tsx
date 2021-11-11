import React, { Component } from "react";

type CounterProps = {
  message: string;
};
type CounterState = {
  count: number;
};
export default class Counter extends Component<CounterProps, CounterState> {
  // if you dont have props we can just use {} in place of CounterProps <{},CounterState>
  // if dont have state then we can skip it <CounterProps>
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
