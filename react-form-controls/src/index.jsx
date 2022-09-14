import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: ''
  };
  this.handleUsernameChange = this.handleUsernameChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleUsernameChange() {
  this.setState({username: event.target.value});
}

handlePasswordChange() {
  this.setState({password: event.target.value});
}

handleSubmit() {
  event.preventDefault();
  console.log('State:', this.state);
}

render() {
  return (
    <form>
      <label>Username
        <input
        type={`text`}
        value={this.state.username}
        onChange={this.handleUsernameChange}>
        </input>
      </label>
      <label>Password
        <input
        type={`text`}
        value={this.state.password}
        onChange={this.handlePasswordChange}>
        </input>
      </label>
      <button onClick={this.handleSubmit}>Sign Up</button>
    </form>
  );
}
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
