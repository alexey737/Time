import React, { useEffect, useState } from "react"
import Loader from "../Loader"
import ClockHands from "./ClockHands"
import ClockMarkup from "./ClockMarkup"

const Clock = () => {
    const [loading, setLoading] = useState(false)

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

                <div className="time__clock clock">
                    <div className="clock__container">
                        <div className="clock__face clock-face">
                            <ClockMarkup />
                            <ClockHands />
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Clock
