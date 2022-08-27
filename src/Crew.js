import {useState} from 'react'

const Crew = ({ data }) => {

const [crew, setCrew] = useState(data[0])
const setCrewClick = (e) => {
    let i = e.target.getAttribute('value')
    setCrew(data[i])
}

    return(
         <div className="main-margin">
            <div className="background">
                <img src='./assets/crew/background-crew-desktop.jpg 1280w' srcSet={`./assets/crew/background-crew-mobile.jpg 375w, ./assets/crew/background-crew-tablet.jpg 768w, ./assets/crew/background-crew-desktop.jpg 1280w`} className="background-img" alt='' />
            </div>
            <h2 className="margin-header text-center-mobile f-s-head-m f-f-bar-cond f-w-400 clr-white let-sp-5 fit-content"><span className="f-w-700 opac">02 </span>&nbsp;MEET YOUR CREW</h2>

        <div className="crew-div">
            
           <div className="crew-text">
            <div className="crew-main-text">
                <h3 className="f-f-crew-sub-head clr-white f-f-bellefair opac up-case">{crew.role}</h3>
                <h2 className="f-s-crew-memb clr-white f-f-bellefair f-w-400 up-case">{crew.name}</h2>
                <p className="f-f-barlow f-s-p clr-light-blue line-h-32px crew-p">{crew.bio}</p>
            </div>
            <div className="crew-radio">
            <ul className="radio-list-crew">
                        <input onChange={setCrewClick}  type="radio" id='one' value={0} name="crew" className="crew-input" defaultChecked></input>
                        <label htmlFor='one'><div className="label-crew"></div></label>
                        <input onChange={setCrewClick} type="radio" id='two' value={1} name="crew" className="crew-input"></input>
                        <label htmlFor='two'><div className="label-crew"></div></label>
                        <input onChange={setCrewClick} type="radio" id='three' value={2} name="crew" className="crew-input"></input>
                        <label htmlFor='three'><div className="label-crew"></div></label>
                        <input onChange={setCrewClick} type="radio" id='four' value={3} name="crew" className="crew-input"></input>
                        <label htmlFor='four'><div className="label-crew"></div></label>
                    </ul>
            </div>
            </div>
            <div className="crew-img-div">
            <img className="crew-img" src={crew.images.webp} alt=""/>
            </div>

            </div>
{/*  */}

        </div>
    )
}

export default Crew