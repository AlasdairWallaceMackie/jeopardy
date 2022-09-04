import React from "react"

import Column from "./components/Column"

export default function App(){
    return (
        <>
            <h1 className="text-center display-2 mb-4">Jeopardy</h1>
            <div className="d-flex justify-content-center">
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
            </div>
        </>
    )
}