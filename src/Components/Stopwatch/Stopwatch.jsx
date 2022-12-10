import React, { useState, useEffect } from "react"
import StopwatchTerm from "./StopwatchTerm"
import StopwatchButtons from "./StopwatchButtons"
import Loader from "../Loader"

const Stopwatch = () => {
    const [term, setTerm] = useState({ ms: 0, ss: 0, mm: 0, hh: 0 })
    const [isStart, setIsStart] = useState(false)
    const [isReset, setIsReset] = useState(false)
    const [loading, setLoading] = useState(false)

    const buttonIsActive = () => isStart ? ' active' : ''
    const checkIsReset = () => isReset ? ' reset' : ''

    useEffect(() => {
        setLoading(true)
        
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {
                loading ? <Loader /> 
                
                :

                <div className="time__stopwatch stopwatch">
                    <div className={`stopwatch__badge${buttonIsActive()}${checkIsReset()}`}></div>
                    <div className="stopwatch__container">
                        <StopwatchTerm term={term} />
                        <StopwatchButtons 
                            term={term} 
                            setTerm={setTerm} 
                            setIsStart={setIsStart} 
                            buttonIsActive={buttonIsActive}
                            setIsReset={setIsReset}
                            checkIsReset={checkIsReset}
                            />
                    </div>
                </div>
            }
        </>
    )
}

export default Stopwatch
