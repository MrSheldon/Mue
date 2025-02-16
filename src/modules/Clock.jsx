import React from 'react';

const checkTime = (i) => {
  if (i < 10) i = '0' + i;
  return i;
};

export default class Clock extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      date: ``,
      ampm: ``,
    };
  }

  startTime() {
    const today = new Date();
    let h       = today.getHours();
    const ampm  = h >= 12 ? 'PM' : 'AM';
    const m     = checkTime(today.getMinutes());
    // const s = checkTime(today.getSeconds());

    if (h > 12) h = h - 12;

    if (h < 12) this.setState({ date: '0' + h + ':' + m, ampm: ampm });
    else this.setState({ date: h + ':' + m, ampm: ampm });

    this.timeout = setTimeout(() => this.startTime(), 500);
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return <h1 className='App-clock'>
      {this.state.date}
      <span className='App-ampm-specifier'>
        {this.state.ampm}  
      </span>
    </h1>;
  }
}
