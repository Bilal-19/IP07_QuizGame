import { useState } from "react";
import { QuizData } from "../Database/QuizData";
import Result from "./Result";

export default function QuizApp() {
    // Creating an state to maintain the question number
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectOption, setSelectOption] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const changeQuestion = () => {
        updateScore()
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectOption(0)
        }
        else {
            setShowResult(true)
        }
    }


    const updateScore = () => {
        if (selectOption === QuizData[currentQuestion].answer) {
            setScore(score + 1)
        }
    }

    const tryAgain = () => {
        setShowResult(false)
        setCurrentQuestion(0)
        setSelectOption(0)
        setScore(0)
    }
    return (
        <>
            <p className="heading-txt">
                QUIZ APP
            </p>
            <div className="container">

                {showResult ? <Result score={score} totalScore={QuizData.length} tryAgain={tryAgain} /> : <>
                    <div className="question">
                        <span id="question-number">{currentQuestion + 1}</span>
                        <span id="question-txt">{QuizData[currentQuestion].question}</span>
                    </div>

                    <div className="option-container">
                        {QuizData[currentQuestion].options.map((option, i) => {
                            return (
                                <>
                                    <button className={`option-btn ${selectOption == i + 1 ? 'checked' : null}`} onClick={() => { setSelectOption(i + 1) }} key={i}> {option}
                                    </button>
                                </>
                            )
                        })}
                    </div>

                    <input type="submit" value='Next' id='next-button' onClick={changeQuestion}></input>
                </>}

            </div>
        </>
    )
}