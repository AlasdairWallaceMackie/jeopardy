import React from "react"
import {nanoid} from "nanoid"

import Question from "./Question"

export default function Column(props){
    const questionList = [1,2,3,4,5] // PLACEHOLDER - Data will be pulled from spreadsheet
    const questionElements = questionList.map((item, index) => (
        <Question
            key={nanoid()}
            activateQuestion={props.activateQuestion}
            dollarAmount={(index+1) * 200}
        />
    ))
    
    return (
        <div className="game-column">
            <div className="game-column--category w-100">
                <h4 className="text-light fw-bold drop-shadow">{props.categoryName}</h4>
            </div>

            {questionElements}
        </div>
    )
}

Column.defaultProps = {
    categoryName: "CATEGORY NAME"
}