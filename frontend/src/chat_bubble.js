import { ChatBubble, Message } from 'react-chat-ui';

class ChatBubble extends React.Component {
  render() {
    return (
      <div className="chat-bubble">
        {this.props.message}
      </div>
    );
  }
}