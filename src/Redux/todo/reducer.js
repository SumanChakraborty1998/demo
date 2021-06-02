import {
    ADD_TODO_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    GET_TODO_FAILURE,
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    TOGGLE_TODO_FAILURE,
    TOGGLE_TODO_REQUEST,
    TOGGLE_TODO_SUCCESS,
} from "./actionTypes";

const initState = {
    todos: [],
    isTodoLoading: false,
    isTodoError: false,
};

export const todoReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO_REQUEST: {
            return {
                ...state,
                isTodoLoading: true,
                isTodoError: false,
            };
        }
        case ADD_TODO_SUCCESS: {
            return {
                ...state,
                isTodoLoading: false,
                isTodoError: false,
            };
        }
        case ADD_TODO_FAILURE: {
            return {
                ...state,
                isTodoLoading: false,
                isTodoError: true,
            };
        }

        case TOGGLE_TODO_REQUEST: {
            return {
                ...state,
                isTodoLoading: true,
                isTodoError: false,
            };
        }
        case TOGGLE_TODO_SUCCESS: {
            return {
                ...state,
                isTodoLoading: false,
                isTodoError: false,
            };
        }
        case TOGGLE_TODO_FAILURE: {
            return {
                ...state,
                isTodoLoading: false,
                isTodoError: true,
            };
        }
        case DELETE_TODO_REQUEST: {
            return {
                ...state,
                isTodoLoading: true,
                isTodoError: false,
            };
        }
        case DELETE_TODO_SUCCESS: {
            return {
                ...state,
                isTodoLoading: false,
                isTodoError: false,
            };
        }
        case DELETE_TODO_FAILURE: {
            return {
                ...state,
                isTodoLoading: false,
                isTodoError: true,
            };
        }

        case GET_TODO_REQUEST: {
            return {
                ...state,
                isTodoLoading: true,
                isTodoError: false,
            };
        }
        case GET_TODO_SUCCESS: {
            return {
                ...state,
                todos: payload,
                isTodoLoading: false,
                isTodoError: false,
            };
        }
        case GET_TODO_FAILURE: {
            return {
                ...state,
                isTodoLoading: false,
                isTodoError: true,
            };
        }
        default:
            return state;
    }
};
