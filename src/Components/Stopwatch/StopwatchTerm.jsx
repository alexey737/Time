import React from 'react'

const StopwatchTerm = (props) => {
    const { term } = props

    return (
        <div className="stopwatch__term term">
            <div className="term__hours">{term.hh < 10 ? `0${term.hh}` : term.hh}</div>
            <div className="term__minutes">{term.mm < 10 ? `0${term.mm}` : term.mm}</div>
            <div className="term__seconds">{term.ss < 10 ? `0${term.ss}` : term.ss}</div>
            <div className="term__milliseconds">{term.ms < 10 ? `0${term.ms}` : term.ms}</div>
        </div>
    )
}

export default StopwatchTerm
