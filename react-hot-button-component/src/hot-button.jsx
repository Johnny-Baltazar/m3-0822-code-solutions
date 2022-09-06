import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.count++;
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render(){
    const clicks = this.state.count;
    let btnClass = '';
    if (clicks >= 3 && clicks <= 5) {
      btnClass = 'three-clicks';
    } else if (clicks >= 6 && clicks <= 8) {
      btnClass = 'six-clicks';
    } else if (clicks >= 9 && clicks <= 11) {
      btnClass = 'nine-clicks';
    } else if (clicks >= 12 && clicks <=14) {
      btnClass = 'twelve-clicks';
    } else if (clicks >= 15 && clicks <= 17) {
      btnClass = 'fifteen-clicks';
    } else if (clicks >= 18) {
      btnClass = 'eighteen-clicks';
    }

    return (
      <div>
        <button className={`hot-button ${btnClass} no-clicks `} onClick={this.handleClick} >
          Hot Button
        </button>
      </div>
    )
  }
}
