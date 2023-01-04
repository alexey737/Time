import React, { useState, useEffect } from 'react'

const TimerMarkup = (props) => {
    const { isStart, isStop, isReset, activeSlides } = props

    const [indexMarkupItem, setIndexMarkupItem] = useState(1)
    const [totalTimerTimer, setTotalTimerTime] = useState(activeSlides[0] * 3600 + activeSlides[1] * 60 + activeSlides[2])
    const [myIntervalMarkup, setMyIntervalMarkup] = useState(null)
    const [timerMarkup, setTimerMarkup] = useState(
        Array.from({length: 120}).map((item, index) => {
            return (
                {
                    id: index,
                    active: false
                }
            )
        })
    )
    

    useEffect(() => {
        if (isReset) {
            clearInterval(myIntervalMarkup)
            setTotalTimerTime(activeSlides[0] * 3600 + activeSlides[1] * 60 + activeSlides[2])
            setIndexMarkupItem(0)
            setTimerMarkup(
                Array.from({length: 120}).map((item, index) => {
                    return (
                        {
                            id: index,
                            active: false
                        }
                    )
                })
            )
        }

        if (isStop) {
            clearInterval(myIntervalMarkup)
        }

        if (isStart) {
            let index = indexMarkupItem
            setMyIntervalMarkup(
                setInterval(() => {
                    setTimerMarkup(timerMarkup.map((item, itemIndex) => {
                        return (
                            index >= itemIndex ? {...item, active: true} : item
                        ) 
                    }))
                    index++
                    setIndexMarkupItem(index)

                }, totalTimerTimer / timerMarkup.length * 1000)
            )
        }

    }, [isStart, isStop, isReset, activeSlides, totalTimerTimer])

    const displayMarkup = () => {
        return (
            timerMarkup.map((item, index) => {
                return (
                    <div key={index} className="timer-markup__block">
                        <div className={`timer-markup__item${isStart ? ' start' : ''}${isStop ? ' paused' : ''}${item.active ? ' active' : ''}`}></div>
                    </div>
                )
            })
        )
    }

    return (
        <div className='timer__markup timer-markup'>
            {displayMarkup()}
        </div>
    )
}

export default TimerMarkup