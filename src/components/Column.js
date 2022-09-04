import React from "react"

import Question from "./Question"
export default function Column(props){
    return (
        <div className="game-column">
            <div className="game-column--category border-bottom border-dark w-100">
                <h3>{props.categoryName}</h3>
            </div>

            <Question dollarAmount="100"/>
            <Question dollarAmount="200"/>
            <Question dollarAmount="300"/>
            <Question dollarAmount="400"/>
            <Question dollarAmount="500"/>
        </div>
    )
}

Column.defaultProps = {
    categoryName: "Category"
}