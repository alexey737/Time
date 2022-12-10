import React from "react"

const ClockMarkup = () => {
    return (
        <div className="clock-face__markup markup">
            <div className="markup__block">
                <div className="markup__item markup__item-line"></div>
                <div className="markup__item markup__item-line"></div>
            </div>
            <div className="markup__block">
                <div className="markup__item markup__item-line"></div>
                <div className="markup__item markup__item-line"></div>
            </div>
            <div className="markup__block">
                <div className="markup__item markup__item-number">3</div>
                <div className="markup__item markup__item-number">9</div>
            </div>
            <div className="markup__block">
                <div className="markup__item markup__item-line"></div>
                <div className="markup__item markup__item-line"></div>
            </div>
            <div className="markup__block">
                <div className="markup__item markup__item-line"></div>
                <div className="markup__item markup__item-line"></div>
            </div>
            <div className="markup__block">
                <div className="markup__item markup__item-number">6</div>
                <div className="markup__item markup__item-number">12</div>
            </div>
        </div>
    )
}

export default ClockMarkup
