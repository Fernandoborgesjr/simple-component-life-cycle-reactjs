import React, {Component} from 'react'

class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    console.info('Function tick called', ['tick']);
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.info('Component Mounted', ['componentDidMount', this.timerID]);
  }

  componentWillUnmount() {
    console.info('Component Unmounted', ['componentWillUnmount']);
    clearInterval(this.timerID);
  }

  componentDidUpdate () {
    console.info('Component Updated', ['componentDidUpdate']);
  }

  shouldComponentUpdate (nextProps, nextState) {

    const shouldBeUpdated = this.state.date < nextState.date;
    console.info('Component Should Updated', ['shouldComponentUpdate', shouldBeUpdated, nextState.date.toLocaleTimeString()]);
    return shouldBeUpdated;
  }

  render() {
    console.info('Component Rendered', ['render']);
    return (
      <div>
        {<h1>{this.state.date.toLocaleTimeString()}</h1> }
      </div>
    )
  }
}

export default Clock