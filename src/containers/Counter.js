import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counter';
import Counter from '../components/Counter';

const CounterContainer = props => <Counter counter={props.counter} {...props.actions} />;

CounterContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(counterActions, dispatch),
});

CounterContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
