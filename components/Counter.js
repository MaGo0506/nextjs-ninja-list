import React from "react";
import {useDispatch} from "react-redux";
import {decrement, increment} from "@/redux/ducks/counter";

const Counter = (props) => {
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment())
    };
    const handleDecrement = () => {
        dispatch(decrement())
    };

    return (
        <div style={{ backgroundColor: "grey", margin: "10px", textAlign: 'center' }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handleIncrement}> Increment </button>
                <button onClick={handleDecrement}> Decrement </button>
            </div>
        </div>
    );
};

export default Counter;