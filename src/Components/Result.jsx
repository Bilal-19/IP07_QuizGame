import React from 'react'

function Result(props) {
    let percentage = props.score / props.totalScore * 100
    return (
        <>
            <div className="show-score">
                Your Score: {props.score} <br />
                Total Score: {props.totalScore} <br />

                You Secured: {`${props.score / props.totalScore * 100} %`}
            </div>
            <button id='next-button' onClick={props.tryAgain}>Try Again</button>

        </>
    )
}

export default Result
