import { MemberActionTypes } from "./memberActions";

export const membersInitialState = {
    loading: false,
    members: [],
    error: false,
};

const memberReducer = (
    state = membersInitialState,
    action
) => {
    switch (action.type) {
        case MemberActionTypes.LoadMembers: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }

        case MemberActionTypes.MembersLoaded: {
            return {
                ...state,
                members: [...action.payload],
                loading: false,
                error: false,
            };
        }

        case MemberActionTypes.MemberLoadingFailed: {
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

export default memberReducer;
