import React from 'react'
import { NavLink, Outlet }  from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className="time__navigation navigation">
                <NavLink to='/'>Clock</NavLink>
                <NavLink to='/stopwatch'>Stopwatch</NavLink>
                <NavLink to='/timer'>Timer</NavLink>
            </div>

            <Outlet />
        </>
    )
}

export default Layout