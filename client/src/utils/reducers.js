import { useReducer } from "react";
import { UPDATE_RESOURCES
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_RESOURCES:
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