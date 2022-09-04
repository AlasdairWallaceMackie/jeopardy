import React from "react"

export default function Question(props){
    function showQuestion(){
        console.log("Show Question")
    }
    
    return (
        <div 
            className="game-question"
            onClick={showQuestion}
        >
            <h1>${props.dollarAmount}</h1>
        </div>
    )
}