import React from "react"

import Column from "./components/Column"

export default function App(){
    const [showQuestion, setShowQuestion] = React.useState(false)
    const [showAnswer, setShowAnswer] = React.useState(false)

    function activateQuestion(){
        setShowQuestion(prevState => prevState=true)
    }
    function hideQuestion(){
        setShowQuestion(prevState => prevState=false)
        setShowAnswer(prevState => prevState=false)
    }
    function revealAnswer(){
        setShowAnswer(prevState => prevState=true)
    }

    const categories = [1,2,3,4,5,6] // PLACEHOLDER - This will be pulled from a spreadsheet
    const columnElements = categories.map(item => (
        <Column
            key={item}
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
                        <h1 className="text-white drop-shadow mb-5">QUESTION HERE</h1>
                        {showAnswer ? 
                            <h1 className="text-warning drop-shadow">ANSWER HERE</h1> :
                            <button className="btn btn-lg btn-secondary shadow-lg" onClick={revealAnswer}>Reveal Answer</button>
                        }
                    </div>
                </div>
            )}
        </>
    )
}

