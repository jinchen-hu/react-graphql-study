import { useQuery, useMutation, useSubscription } from "@apollo/client";
import {
  messagesQuery,
  addMessageMutation,
  messageAddedSubscription,
} from "./graphql/queries";

export const useMessages = () => {
  const { data } = useQuery(messagesQuery);
  const messages = data ? data.messages : [];
  useSubscription(messageAddedSubscription, {
    onSubscriptionData: ({ client, subscriptionData }) => {
      client.writeQuery({
        query: messagesQuery,
        data: {
          messages: messages.concat(subscriptionData.data.messageAdded),
        },
      });
    },
  });

  const [addMessage] = useMutation(addMessageMutation);

  return {
    messages,
    addMessage: (text) => addMessage({ variables: { input: { text } } }),
  };
};
