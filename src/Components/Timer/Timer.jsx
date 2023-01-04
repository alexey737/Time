import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, FreeMode } from 'swiper'
import TimerMarkup from './TimerMarkup'
import Loader from '../Loader'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/free-mode'

const Timer = () => {
    const [loading, setLoading] = useState(null)
    const [myInterval, setMyInterval] = useState(null)  // timer interval
    const [activeSlides, setActiveSlides] = useState([0, 0, 0]) // active slide indexes (hours, minutes, seconds)
    const [isStart, setIsStart] = useState(false) // start timer start
    const [isStop, setIsStop] = useState(false) // timer pause (for styles to work correctly)
    const [isReset, setIsReset] = useState(true) // complete reset of the timer
    const [timerTime, seTimerTime] = useState([     // timer sliders (hours, minutes, seconds)
        Array.from({ length: 24 }).map((item, index) => index),
        Array.from({ length: 60 }).map((item, index) => index),
        Array.from({ length: 60 }).map((item, index) => index)
    ])

    
    useEffect(() => {
        setLoading(true)
        
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const handlerStart = () => {
        const sumIndex = activeSlides.reduce((acc, item) => acc + item, 0)
        
        if (sumIndex > 0) {
            setIsStop(false)
            setIsStart(true)
            setIsReset(false)
        }
    }

    const handlerStop = () => {
        setIsStop(true)
        setIsStart(false)
        clearInterval(myInterval)
    }

    const handlerReset = () => {
        clearInterval(myInterval)
        setIsStart(false)
        setIsStop(false)
        setIsReset(true)
        seTimerTime([
            Array.from({ length: 24 }).map((item, index) => index),
            Array.from({ length: 60 }).map((item, index) => index),
            Array.from({ length: 60 }).map((item, index) => index)
        ])
    }

    useEffect(() => {
        if (isReset) {
            clearInterval(myInterval)
        }

        if (isStart) {
            let hh = timerTime[0][activeSlides[0]]  // set
            let mm = timerTime[1][activeSlides[1]]  // timer
            let ss = timerTime[2][activeSlides[2]]  // values

            setMyInterval(
                setInterval(() => {
                if (hh === 0 && mm === 0 && ss === 0) { // if all timer values are 0, then reset the timer
                    handlerReset()
                } else {
                    if (ss === 0 && mm !== 0) {
                        ss = 60
                        mm--
                    } 

                    if (mm === 0 && hh !== 0 && ss === 0) {
                        mm = 59
                        ss = 60
                        hh--
                    } 

                    ss--

                    seTimerTime(timerTime.map((arr, indexArray) => {    // make a countdown and set a new value for displaying the timer
                        return arr.map((item, indexItem) => {
                            return (
                                indexArray === 0 && indexItem === activeSlides[indexArray] ? hh : 
                                indexArray === 1 && indexItem === activeSlides[indexArray] ? mm :
                                indexArray === 2 && indexItem === activeSlides[indexArray] ? ss :
                                item
                            )  
                        })
                    }))

                }
            }, 1000))
        }
    }, [isStart, isReset, activeSlides])

    const handlerSlideChange = (sliderProps) => {   // when scrolling any slider, change the values of active slides
        const { realIndex } = sliderProps
        const swiperId = +sliderProps.$el[0].dataset.id
        setActiveSlides(activeSlides.map((item, index) => index === swiperId ? realIndex : item))
    }

    function displaySwipers() {
        return (
            timerTime.map((arr, indexArray) => {
                return (
                    <Swiper
                        className={isStart || isStop ? 'swiper-lock' : ''}
                        key={indexArray}
                        data-id={indexArray}
                        modules={[EffectCoverflow, FreeMode]}
                        spaceBetween={50}
                        slidesPerView={4}
                        centeredSlides
                        grabCursor
                        loop
                        freeMode={{ enabled: true, sticky: true }}
                        direction='vertical'
                        effect='coverflow'
                        coverflowEffect={{ rotate: 0, slideShadows: false }}
                        onSlideChange={handlerSlideChange}
                    >
                        {arr.map((item, indexItem) => {
                            return (
                                <SwiperSlide key={indexItem}>
                                    {({ isActive, isNext, isPrev }) => (
                                        <div className={(isStart || isStop) && activeSlides[indexArray] !== indexItem ? 'swiper-slide-invisible' :
                                            isNext || isPrev ? 'nearest-slide' :
                                                !isActive ? 'inactive-slide' : 'active-slide'}
                                        >
                                            {item <= 9 ? `0${item}` : item}
                                        </div>
                                    )}
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                )
            })
        )
    }

    return (

        <>
            {
                loading ? <Loader />

                :

                <div className="time__timer timer">
                    <div className="timer__container">
                        <TimerMarkup activeSlides={activeSlides} isStart={isStart} isReset={isReset} isStop={isStop} />
                        <div className="timer__swiper">
                            {displaySwipers()}            
                        </div>
                        <div className="timer__buttons">
                            <button onClick={handlerStart} className={`timer__button button-start ${isStart ? 'active' : ''}`}>
                                <img src="./icons/play-icon.svg" alt="Start" />
                            </button>
                            <button onClick={handlerStop} className={`timer__button button-stop ${isStart ? 'active' : ''}`}>
                                <img src="./icons/pause-icon.svg" alt="Stop" />
                            </button>
                            <button onClick={handlerReset} className="timer__button button-reset">
                                <img src="./icons/reset-icon.svg" alt="Reset" />
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Timer