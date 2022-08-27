import { useState } from 'react'

const Destination = ( {data} ) => {
    const [destInfo, setDestInfo] = useState(data[0])
    const setDestClick = (e) => {
        setDestInfo(data[e.target.value])
    }
    
    return(
        <div className="destination main-margin">
        <img src='./assets/destination/background-destination-desktop.jpg 1280w' srcSet={`./assets/destination/background-destination-mobile.jpg 375w, ./assets/destination/background-destination-tablet.jpg 768w, ./assets/destination/background-destination-desktop.jpg 1280w`} className="background" alt='' />
            <div className="image-destination">
            <h2 className="text-center-mobile f-s-head-m f-f-bar-cond f-w-400 clr-white pick-dest let-sp-5"><span className="f-w-700 opac">01 </span>&nbsp;PICK YOUR DESTINATION</h2>
            <div className="img-div">           
            <img className="destin-img" src={destInfo.images.webp} alt=""/>
            </div>
            </div>
            <div className="text-destin">
                <div className="radio-destin">
                    <ul className="radio-list">
                        <input type="radio" id='moon' value={0} name="dest" defaultChecked onChange={setDestClick}></input>
                        <label htmlFor='moon' className="clr-white f-f-bar-cond f-s-normal">MOON</label>
                        <input type="radio" id='mars' value={1} name="dest" onChange={setDestClick}></input>
                        <label htmlFor='mars' className="clr-white f-f-bar-cond f-s-normal">MARS</label>
                        <input type="radio" id='europa' value={2} name="dest" onChange={setDestClick}></input>
                        <label htmlFor='europa' className="clr-white f-f-bar-cond f-s-normal">EUROPA</label>
                        <input type="radio" id='titan' value={3} name="dest" onChange={setDestClick}></input>
                        <label htmlFor='titan' className="clr-white f-f-bar-cond f-s-normal">TITAN</label>
                    </ul>
                </div>
                <div className="main-text-destin">
                    <h2 className="f-s-head-dest f-f-bellefair clr-white f-w-400 up-case">{destInfo.name}</h2>
                    <p className="f-f-barlow f-s-p clr-light-blue let-sp-1 line-h-32px">{destInfo.description}</p>
                </div>
                <div className="distance-info">
                    <div className="avg-distance">
                        <p className="f-s-14 clr-light-blue f-f-bar-cond let-sp-3">AVG. DISTANCE</p>
                        <p className="f-f-bellefair f-s-28 clr-white up-case">{destInfo.distance}</p>
                    </div>
                    <div className="travel-time">
                        <p className="f-s-14 clr-light-blue f-f-bar-cond let-sp-3">EST. TRAVEL TIME</p>
                        <p className="f-f-bellefair f-s-28 clr-white up-case">{destInfo.travel}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination