import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }



  render() {
    let text = '';
    if (this.state.isClicked) {
      text = 'Thank you!';
    } else {
      text = 'Click Me!'
    }

    return(
      <div>
        <button onClick={this.handleClick}>
          {text}
        </button>
      </div>
    )
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
