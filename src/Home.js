

const Home = () => {
    return(
        <div className="home home-margin">
            <div className="background">
        <img src='/assets/home/background-home-desktop.jpg 1280w' srcSet={`/assets/home/background-home-mobile.jpg 300w, /assets/home/background-home-tablet.jpg 768w, /assets/home/background-home-desktop.jpg 1280w`} className='background-img' alt='' />
        </div>
            <div className="home-text">
            <p className="f-s-head-m f-f-bar-cond clr-light-blue up-case let-sp-5">so, you want to travel to</p>
            <h1 className="f-s-head-xl f-f-bellefair clr-white f-w-400">SPACE</h1>
            <p className="clr-light-blue f-s-p f-f-barlow line-h-2">Let’s face it; if you want to go to space, you might as well genuinely go to outer space an   d not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="home-image">
            <p className="clr-almost-black f-f-bellefair f-s-explore">explore</p>
            </div>
        </div>
    )
}

export default Home