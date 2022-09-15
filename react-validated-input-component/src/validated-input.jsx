import React from 'react';

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    const value = event.target.value;
    this.setState({ password: value });
  }

  render() {
    const passwordLegnth = this.state.password.length;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/;
    let formContainer = 'unapproved-container';
    let passwordRequired = '';
    let passwordShort = '';
    let iconClass = 'fa-solid fa-x color-red';
    if (passwordLegnth === 0) {
      passwordRequired = 'password-required';
      passwordShort = 'password-short hidden';
    } else if (passwordLegnth >= 1 && passwordLegnth <= 7) {
      passwordRequired = 'password-required hidden';
      passwordShort = 'password-short';
    } else if (regex.test(this.state.password)) {
      passwordRequired = 'hidden';
      passwordShort = 'hidden';
      iconClass = 'fa-solid fa-check check-mark';
      formContainer = 'approved-container';
    }
    return (
      <div className={`${formContainer}`}>
        <div>
          <form>
            <label htmlFor="password-input">
            <h3>Password</h3>
              <input
              name="password"
              type="password"
              value={this.state.password}
              id="password-input"
              onChange={this.handlePasswordChange} />
              <h4 className={`${passwordRequired} color-red`}>A password is required.</h4>
              <h4 className={`${passwordShort} color-red`}>Your password is too short.</h4>
            </label>
          </form>
        </div>
        <div>
          <i className={`${iconClass}`}></i>
        </div>
      </div>
    );
  }
}
