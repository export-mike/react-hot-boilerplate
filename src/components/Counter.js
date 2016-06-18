// @flow
import React, { Component } from 'react';

type Props = {
  counter: number,
  increment: Function,
  incrementIfOdd: Function,
  decrement: Function,
  counter: Function,
};

type State = {counter: number};

export default class Counter extends Component {
  state: State;
  props: Props;
  interval: number;

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
    );
  }
}
