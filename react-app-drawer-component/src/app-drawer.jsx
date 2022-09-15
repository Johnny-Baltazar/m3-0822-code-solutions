import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'fa-solid fa-bars fa-3x',
      menu: 'hidden',
      shadeStatus: 'hidden'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      icon: 'hidden',
      menu: '',
      shadeStatus: 'shade'
    });
  }

  handleMenuChange(event) {
    this.setState({
      icon: 'fa-solid fa-bars fa-3x',
      menu: 'hidden',
      shadeStatus: 'hidden'
    });
  }

  render() {
    const iconClass = this.state.icon;
    const menuClass = this.state.menu;
    const shadeStatus = this.state.shadeStatus;
    return (
      <div className="container">
        <div className="row">
          <div>
            <i className={`${iconClass}`} onClick={this.handleChange}></i>
          </div>
          <div className={`${menuClass}`}>
            <h1 onClick={this.handleMenuChange}>Menu</h1>
            <h3 onClick={this.handleMenuChange}>About</h3>
            <h3 onClick={this.handleMenuChange}>Get Started</h3>
            <h3 onClick={this.handleMenuChange}>Sign In</h3>
          </div>
        </div>
        <div className={`${shadeStatus}`} onClick={this.handleMenuChange}>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
