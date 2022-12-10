import React, { useState } from 'react'

const StopwatchButtons = (props) => {
    const { term, setTerm, setIsStart, buttonIsActive, setIsReset, checkIsReset } = props
	const [myInterval, setMyInterval] = useState(null)

	let updateMs = term.ms
	let updateS = term.ss
	let updateM = term.mm
	let updateH = term.hh

	const handlerStart = () => {
        setIsStart(true)
        setIsReset(false)

		setMyInterval(
			setInterval(() => {
				if (updateM === 60) {
					updateH++
					updateM = 0
				}

				if (updateS === 60) {
					updateM++
					updateS = 0
				}

				if (updateMs === 100) {
					updateS++
					updateMs = 0
				}

				updateMs++
				setTerm({ ms: updateMs, ss: updateS, mm: updateM, hh: updateH })
			}, 10)
		)
	}

	const handlerStop = () => {
        setIsStart(false)
        clearInterval(myInterval)
    }

	const handlerReset = () => {
		handlerStop()
        setIsReset(true)
		setTerm({ ms: 0, ss: 0, mm: 0, hh: 0 })
	}

    return (
        <div className="stopwatch__buttons buttons">
            <button onClick={handlerStart} className={`buttons__item buttons__item-start${buttonIsActive()}`}>
                <img src="./icons/play-icon.svg" alt="Start" />
            </button>
            <button onClick={handlerStop} className={`buttons__item buttons__item-stop${buttonIsActive()}`}>
                <img src="./icons/pause-icon.svg" alt="Start" />
            </button>
            <button onClick={handlerReset} className={`buttons__item buttons__item-reset${checkIsReset()}`}>
                <img src="./icons/reset-icon.svg" alt="Start" />
            </button>
        </div>
    )
}

export default StopwatchButtons
