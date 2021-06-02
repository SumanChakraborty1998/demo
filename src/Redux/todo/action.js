import {
    ADD_TODO_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    TOGGLE_TODO_FAILURE,
    TOGGLE_TODO_REQUEST,
    TOGGLE_TODO_SUCCESS,
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE,
} from "./actionTypes";

//.....Add actions....

export const addTodoRequest = () => {
    return {
        type: ADD_TODO_REQUEST,
    };
};

export const addTodoSuccess = () => {
    return {
        type: ADD_TODO_SUCCESS,
    };
};

export const addTodoFailure = () => {
    return {
        type: ADD_TODO_FAILURE,
    };
};

//.....Toggle Actions...

export const toggleTodoRequest = (payload) => {
    return {
        type: TOGGLE_TODO_REQUEST,
    };
};

export const toggleTodoSuccess = () => {
    return {
        type: TOGGLE_TODO_SUCCESS,
    };
};

export const toggleTodoFailure = () => {
    return {
        type: TOGGLE_TODO_FAILURE,
    };
};

//....Delete Actions...//

export const deleteTodoRequest = () => {
    return {
        type: DELETE_TODO_REQUEST,
    };
};

export const deleteTodoSuccess = () => {
    return {
        type: DELETE_TODO_SUCCESS,
    };
};

export const deleteTodoFailure = () => {
    return {
        type: DELETE_TODO_FAILURE,
    };
};

//....Get Actions.....

export const getTodoRequest = () => {
    return {
        type: GET_TODO_REQUEST,
    };
};

export const getTodoSuccess = (payload) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: payload,
    };
};

export const getTodoFailure = () => {
    return {
        type: GET_TODO_FAILURE,
    };
};
