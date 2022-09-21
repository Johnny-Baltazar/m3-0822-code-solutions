import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNumber: null
    };
  }

  handleClick(number) {
    if (this.state.activeNumber === number) {
      this.setState({
        activeNumber: null
      });
    } else {
      this.setState({
        activeNumber: number
      });
    }
  }

  render() {
    const topicItems = this.props.topics.map(topic =>
      <div className='topic' key={topic.number} onClick={() => this.handleClick(topic.number)}>
        <div className='topic-header'>
          <h2>{topic.subject}</h2>
        </div>
        {
          this.state.activeNumber === topic.number
            ? <div className='topic-details'> {topic.details}</div>
            : null
        }
      </div >
    );
    return (
      <div className="container">
        {topicItems}
      </div>
    );
  }
}

export default Accordion;
