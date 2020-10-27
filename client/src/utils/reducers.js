import { useReducer } from "react";
import { UPDATE_RESOURCE
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_RESOURCE:
            return {
                ...state,
                resources: [...action.resources],
            };

            default:
                return state;
    }
};

export function useResourceReducer(initialState) {
    return useReducer(reducer, initialState)
}