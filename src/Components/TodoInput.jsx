import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    addTodoFailure,
    addTodoRequest,
    addTodoSuccess,
} from "../Redux/todo/action";

export const TodoInput = ({ handleGet }) => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addTodoRequest());
        const payload = {
            title: title,
            status: false,
        };
        axios
            .post("http://localhost:3001/todos", payload)
            .then(() => dispatch(addTodoSuccess()))
            .catch(() => dispatch(addTodoFailure()))
            .finally(() => handleGet());
    };

    return (
        <div>
            <br />
            <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAdd}>ADD</button>
        </div>
    );
};
