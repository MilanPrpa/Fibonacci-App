import * as React from 'react';
import { fibonacciAlgorithm } from '../utils/fibonacciAlgorithm';
import DisplayFibNumber from './DisplayFibNumber';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fibnumber: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ fibnumber: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={onsubmit}>
          <input
            type="text"
            placeholder="Enter Nth Number Here"
            value={this.state.fibnumber}
            onChange={this.onChange}
          />
          <button onClick={() => fibonacciAlgorithm(this.state.fibnumber)}>
            Enter
          </button>
        </form>
      </div>
    );
  }
}
