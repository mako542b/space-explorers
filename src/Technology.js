import {useState} from 'react'


const Technology = ({ data }) => {


    const [technology, setTechnology] = useState(data[0])
    const setTechnologyClick = (e) => {
    let i = e.target.getAttribute('value')
    setTechnology(data[i])
}

    return(
        <div className="technology-main main-margin">
            <img src='/assets/technology/background-technology-desktop.jpg 1280w' srcSet={`/assets/technology/background-technology-mobile.jpg 375w, /assets/technology/background-technology-tablet.jpg 768w, /assets/technology/background-technology-desktop.jpg 1280w`} className="background" alt='' />
            <div className="tech-upper-heading">
            <h2 className="text-center-mobile pad-in-1 f-s-head-m f-f-bar-cond f-w-400 clr-white let-sp-5"><span className="f-w-700 opac">03 </span>&nbsp;SPACE LAUNCH 101</h2>
            </div>
            <div className="technology-sec-main">
                <div className="technology-text-part">
                    <div className="technology-radio">
                        <input onChange={setTechnologyClick} type="radio" id='vehicle' value={0} name="technology" className="techno-input" defaultChecked></input>
                        <label htmlFor='vehicle'><div className="label-techn">1</div></label>
                        <input onChange={setTechnologyClick} type="radio" id='port' value={1} name="technology" className="techno-input"></input>
                        <label htmlFor='port'><div className="label-techn">2</div></label>
                        <input onChange={setTechnologyClick} type="radio" id='capsule' value={2} name="technology" className="techno-input"></input>
                        <label htmlFor='capsule'><div className="label-techn">3</div></label>
                    </div>
                    <div className="technology-text">
                        <p className="f-s-normal clr-light-blue f-f-bar-cond techn-p let-sp-3">THE TERMINOLOGY...</p>
                        <h2 className="f-s-crew-memb clr-white f-f-bellefair f-w-400 up-case">{technology.name}</h2>
                        <p className="f-f-barlow f-s-p clr-light-blue line-h-32px techn-p">{technology.description}</p>
                    </div>
                </div>
                <div className="technology-img-div">
                <img src={`${technology.images.portrait} 1280w`} srcSet={`${technology.images.landscape} 768w, ${technology.images.portrait} 1280w`} className="technology-img" alt='' />
                </div>
            </div>
        </div>
    )
}

export default Technology