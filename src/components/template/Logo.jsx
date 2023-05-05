import React from 'react'
import './Logo.css'
import logo from "../../aserts/imgs/logo.png"
import {Link} from 'react-router-dom'

export default props =>
    <aside className = "logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>