import React,{ useState, useEffect } from "react"

const ClockHands = () => {
    const [secondsTiltAngle, setSecondsTiltAngle] = useState(new Date().getSeconds() * 6)
    const [mintuesTiltAngle, setMintuesTiltAngle] = useState(new Date().getMinutes() * 6 + (6 / 60 * new Date().getSeconds()))
    const [hoursTiltAngle, setHoursTiltAngle] = useState(new Date().getHours() * 30 + ((new Date().getMinutes() * 60 + new Date().getSeconds()) * 0.5 / 60))

    const [clockFaceStyle, setClockFaceStyle] = useState({
        hourHand: 'translate(-50%, -50%) rotate(0deg)',
        minuteHand: 'translate(-50%, -50%) rotate(0deg)', 
        secondHand: 'translate(-50%, -50%) rotate(0deg)'
    })

    setInterval(() => {
        setSecondsTiltAngle(new Date().getSeconds() * 6)
        setMintuesTiltAngle(new Date().getMinutes() * 6 + (6 / 60 * new Date().getSeconds()))
        setHoursTiltAngle(new Date().getHours() * 30 + ((new Date().getMinutes() * 60 + new Date().getSeconds()) * 0.5 / 60))

    }, 1000)

    useEffect(() => {
        setClockFaceStyle({
            hourHand: `translate(-50%, -50%) rotate(${hoursTiltAngle}deg)`,
            minuteHand: `translate(-50%, -50%) rotate(${mintuesTiltAngle}deg)`, 
            secondHand: `translate(-50%, -50%) rotate(${secondsTiltAngle}deg)`
        })
    }, [mintuesTiltAngle, secondsTiltAngle, hoursTiltAngle])


    return (
        <div className="clock-face__hands">
            <div style={{transform: `${clockFaceStyle.hourHand}`}} className="clock-face__hour-hand"></div>
            <div style={{transform: `${clockFaceStyle.minuteHand}`}} className="clock-face__minute-hand"></div>
            <div style={{transform: `${clockFaceStyle.secondHand}`}} className="clock-face__second-hand"></div>
        </div>
    )
}

export default ClockHands
