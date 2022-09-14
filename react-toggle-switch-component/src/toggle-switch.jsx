import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isClicked: true});
  }

  render() {
    let switchClass = '';
    let toggleRight = '';
    let text = '';
    if(this.state.isClicked) {
      switchClass = 'color-switch';
      toggleRight = 'toggle-right';
      text = 'ON';
    } else {
      text = 'OFF'
    }

    return (
      <div className={`switch-container`} >
        <div className={`switch ${switchClass}`}>
          <div className={`toggle ${toggleRight}`} onClick={this.handleClick}>
          </div>
        </div>
        <div className={`text-class`}>
          {text}
        </div>
      </div>
    )
  }
}
