import React from "react"

export default function Question(props){
    return (
        <div
            className="game-question"
            onClick={() => props.activateQuestion(props.question, props.answer)}
        >
            <h1 className="text-warning fw-bold drop-shadow">${props.dollarAmount}</h1>
        </div>
    )
}