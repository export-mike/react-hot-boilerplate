// @flow
import React, { Component, PropTypes } from 'react';

type Props = {name: string};
type State = {counter: number};

export default class Counter extends Component{
  interval: number;
  state: State;
  props: Props;

  constructor(props: Props) {
    super(props);
    this.state = { counter: 1};
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(): React.Element{
    return (
      <h2>Counter: {this.state.counter} {this.props.name}</h2>
   );
  }
}

Counter.propTypes = {
  name: PropTypes.string
};
