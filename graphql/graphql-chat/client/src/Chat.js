import React from "react";
import { useMessages } from "./hooks";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const Chat = ({ user }) => {
  //const [messages, setMessages] = useState([]);
  // useQuery(messagesQuery, {
  //   onCompleted: ({ messages }) => setMessages(messages),
  // });
  // useSubscription(messageAddedSubscription, {
  //   onSubscriptionData: ({ subscriptionData }) => {
  //     setMessages(messages.concat(subscriptionData.data.messageAdded));
  //   },
  // });
  // const [addMessage] = useMutation(addMessageMutation);

  const { messages, addMessage } = useMessages();

  // const handleSend = async (text) => {
  //   await addMessage(text);
  // };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Chatting as {user}</h1>
        <MessageList user={user} messages={messages} />
        <MessageInput onSend={addMessage} />
      </div>
    </section>
  );
};

export default Chat;
