import React from 'react';

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ''
    }
  }

  handleMessageOnChange = (e) => {
    this.setState({
      messageText: e.target.value
    }, () => console.log(this.state.messageText))
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onMessage(this.props.name, this.state.messageText);
    this.setState({messageText: ''})
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <form className='form' onSubmit={this.onSubmit}>
          <label>Meddelande</label>
          <textarea onChange={this.handleMessageOnChange} value={this.state.messageText}></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    )
  }
}