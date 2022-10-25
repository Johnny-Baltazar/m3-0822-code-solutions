import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.setState({
      play: true,
    });
      this.interval = setInterval(() => {
        this.setState(prevState => {
          return {
            count: prevState.count + 1
          };
        });
      }, 1000);
  }

  pause() {
    this.setState({ play: false });
      clearInterval(this.interval);
  };

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    let time = this.state.count;
    if (this.state.play && time >= 100 && time > 100) {
      return (
        <div className={`column`}>
          <div className={`circle`}>
            <div className={`text greater-hundred`}>{time}</div>
          </div>
          <i className={`fa-solid fa-pause fa-3x`} onClick={this.pause}></i>
        </div>
      )
    } else if (this.state.play && time >= 10 && time < 100) {
      return (
        <div className={`column`}>
          <div className={`circle`}>
            <div className={`text greater-ten`}>{time}</div>
          </div>
          <i className={`fa-solid fa-pause fa-3x`} onClick={this.pause}></i>
        </div>
      )
    } else if (this.state.play && time < 10) {
      return (
        <div className={`column`}>
          <div className={`circle`}>
            <div className={`text`}>{time}</div>
          </div>
          <i className={`fa-solid fa-pause fa-3x`} onClick={this.pause}></i>
        </div>
      )
    } else if (!this.state.play && time >= 10 && time < 100) {
      return (
        <div className={`column`}>
          <div className={`circle`} onClick={this.reset}>
            <div className={`text greater-ten`}>{time}</div>
          </div>
          <i className={`fa-solid fa-play fa-3x`} onClick={this.handleClick}></i>
        </div>
      )
    } else if (!this.state.play && time >=100 && time > 10) {
      return (
        <div className={`column`}>
          <div className={`circle`} onClick={this.reset}>
            <div className={`text greater-hundred`}>{time}</div>
          </div>
          <i className={`fa-solid fa-play fa-3x`} onClick={this.handleClick}></i>
        </div>
      )
    } else {
      return (
        <div className={`column`}>
          <div className={`circle`} onClick={this.reset}>
            <div className={`text`}>{time}</div>
          </div>
          <i className={`fa-solid fa-play fa-3x`} onClick={this.handleClick}></i>
        </div>
      )
    }
  }
}
