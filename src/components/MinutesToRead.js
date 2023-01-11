import React from 'react';

const Minutes = () => {
    let i;
    setInterval(() => {
        return i += "☕️"
    }, 300000)
}

const MinutesRead = () => {
    let i = "🍱🍱🍱🍱"
    setInterval(() => {
        i += "🍱🍱🍱🍱"
    }, 1800000)
}

const Counter = () => {
    (Minutes < 3000) ? Minutes : MinutesRead
}

Counter();

function DecadeReview(props) {
    return (
        <h1> {props.date}.
            Counter()</h1>
    )
}

export default DecadeReview;