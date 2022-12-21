import React, { Component } from "react";

const LearnComponent = () =>{
    const Time = new Date().toLocaleTimeString();

    // Learn State
    const [count, setCount] = React.useState(0);

    return (
        <>
        <center>
            <h1>Hallo! This is From Functional Component!</h1>
            <hr />
            <h1> {Time} </h1>
            <hr />
            <h1> Counter</h1>
            <button onClick = { function() {
                setCount(count - 1);
            }}>
                -
            </button>

            <span> {count} </span>

            <button onClick = { function() {
                setCount(count + 1);
            }}>
                +
            </button>
        </center>
        </>
    )    
}

export default LearnComponent;