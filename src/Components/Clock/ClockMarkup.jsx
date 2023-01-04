import React from "react"

const ClockMarkup = () => {
    return (
        <div className="clock-face__markup clock-markup">
            <div className="clock-markup__block">
                <div className="clock-markup__item clock-markup__item-line"></div>
                <div className="clock-markup__item clock-markup__item-line"></div>
            </div>
            <div className="clock-markup__block">
                <div className="clock-markup__item clock-markup__item-line"></div>
                <div className="clock-markup__item clock-markup__item-line"></div>
            </div>
            <div className="clock-markup__block">
                <div className="clock-markup__item clock-markup__item-number">3</div>
                <div className="clock-markup__item clock-markup__item-number">9</div>
            </div>
            <div className="clock-markup__block">
                <div className="clock-markup__item clock-markup__item-line"></div>
                <div className="clock-markup__item clock-markup__item-line"></div>
            </div>
            <div className="clock-markup__block">
                <div className="clock-markup__item clock-markup__item-line"></div>
                <div className="clock-markup__item clock-markup__item-line"></div>
            </div>
            <div className="clock-markup__block">
                <div className="clock-markup__item clock-markup__item-number">6</div>
                <div className="clock-markup__item clock-markup__item-number">12</div>
            </div>
        </div>
    )
}

export default ClockMarkup
