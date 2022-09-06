import React from "react"
import {nanoid} from "nanoid"

import Column from "./components/Column"
import gameData from "./jeopardyData"

// import Papa from "papaparse"
// let csvToJson = require('convert-csv-to-json')
// console.log("GAME DATA: " + JSON.stringify(gameData))

export default function App(){
    const [showQuestion, setShowQuestion] = React.useState(false)
    const [showAnswer, setShowAnswer] = React.useState(false)
    const [currentSet, setCurrentSet] = React.useState({
        question: "Placeholder Question",
        answer: "Placeholder Answer"
    })

    function activateQuestion(q, a){
        if (showQuestion !== false)
            return 0

        setCurrentSet(prevState => prevState={question: q, answer: a})
        setShowQuestion(prevState => prevState=true)
    }
    function hideQuestion(){
        setShowQuestion(prevState => prevState=false)
        setShowAnswer(prevState => prevState=false)
    }
    function revealAnswer(){
        setShowAnswer(prevState => prevState=true)
    }

    const columnElements = gameData.map(item => (
        <Column
            key={nanoid()}
            categoryName={item.name}
            questions={item.questions}
            activateQuestion={activateQuestion}
        />
    ))

    return (
        <>
            <h1 className="text-center text-light display-2 mb-4 fw-bold">Jeopardy</h1>
            <div className="d-flex justify-content-center">
                <div 
                    id="game-board"
                    className={`d-flex justify-content-center ${showQuestion ? "blur" : ""}`}
                >
                    {columnElements}
                </div>
            </div>

            {showQuestion && (
                <div id="current-question" className="position-absolute top-50 start-50 translate-middle shadow-lg border border-dark border-3 p-5 rounded-3">
                    <button id="current-question--close" className="btn btn-lg text-light fw-bold" onClick={hideQuestion}>X</button>
                    
                    <div className="d-flex justify-content-center flex-wrap">
                        <h1 className="text-white drop-shadow mb-5 w-100">{currentSet.question}</h1>
                        {showAnswer ? 
                            <h1 className="text-warning drop-shadow w-100">{currentSet.answer}</h1> :
                            <button className="btn btn-lg btn-secondary shadow-lg" onClick={revealAnswer}>Reveal Answer</button>
                        }
                    </div>
                </div>
            )}
        </>
    )
}

