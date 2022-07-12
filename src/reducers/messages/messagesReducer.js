import { messageActionTypes } from "./messageActions";

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
            return {
                ...state,
                messages: [...action.payload],
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
