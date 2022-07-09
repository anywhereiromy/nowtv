import { messageActionTypes } from "./messageActions";
import { orderByAscendingTimestamp } from "../helpers/orderByAscendingTimestamp";

export const messagesInitialState = {
    loading: false,
    messages: [],
    error: false,
};

const messageReducer = (
    state = messagesInitialState,
    action
) => {
    switch (action.type) {
        case messageActionTypes.LoadMessages: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }

        case messageActionTypes.MessagesLoaded: {
            const messagesInAscendingTimestamp = orderByAscendingTimestamp(action.payload);
            return {
                ...state,
                messages: [...messagesInAscendingTimestamp],
                loading: false,
                error: false,
            };
        }

        case messageActionTypes.MessageLoadingFailed: {
          return {
              ...state,
              loading: false,
              error: true,
          };
      }

        default:
            return state;
    }
};

export default messageReducer;
