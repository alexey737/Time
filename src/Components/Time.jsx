import React from "react"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Clock from "./Clock/Clock"
import Stopwatch from "./Stopwatch/Stopwatch"
import Layout from "./Layout"
import Loader from "./Loader"

const Time = () => {

    return (
        <BrowserRouter>
            <div className="time">
                <div className="time__container _container">
                    <Routes>
                        <Route path="/" element={<Layout />}>    
                            <Route index element={<Clock />}/>
                            <Route path="/stopwatch" element={<Stopwatch />}/>
                            <Route path="/timer" element={<Loader />}/>
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default Time
