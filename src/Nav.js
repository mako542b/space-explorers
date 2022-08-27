import{NavLink} from "react-router-dom"
import { useState } from "react"

const Nav = () => {

const [expanded, setExpanded] = useState(false)

    const setExpandedValue = () => {
        setExpanded(!expanded)
    }

    return(
        <nav className="clr-white nav">
            <div className="nav-logo flex-center"><img className="img" src={'/assets/shared/logo.svg'} alt=""/></div>
            <div className="nav-line"></div>
            <button className="hamburger-btn" value={expanded} onClick={setExpandedValue}></button>
            <div className="nav-container">
            <ul className="nav-list">
                <NavLink className="link f-f-bar-cond f-w-400 f-s-normal" to="/"><span className="link-num f-w-700">00 &nbsp;</span>            HOME       </NavLink>
                <NavLink className="link f-f-bar-cond f-w-400 f-s-normal" to="/destination"><span className="link-num f-w-700">01 &nbsp;</span> DESTINATION</NavLink>
                <NavLink className="link f-f-bar-cond f-w-400 f-s-normal" to="/crew"><span className="link-num f-w-700">02 &nbsp;</span>        CREW       </NavLink>
                <NavLink className="link f-f-bar-cond f-w-400 f-s-normal" to="/technology"><span className="link-num f-w-700">03 &nbsp;</span>  TECHNOLOGY </NavLink>
            </ul>  
            </div>
        </nav>
    )
}

export default Nav