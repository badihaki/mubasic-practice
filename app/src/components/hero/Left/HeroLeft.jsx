import "./HeroLeft.Style.scss"

export default function LeftHero(){
    return <div id="hero__left">
        <div className="left-top">
            <button className="icon">mubasic</button>
        </div>
        <div className="left-wrap">
            <p className="wrap-block">
                The <span className="orange-text">#1</span> source for weird sounds I made.
            </p>
        </div>
        <div className="left-bottom">
            <p className="details">
                Haki reverse engineered <a href="https://mubasic-test.webflow.io/" target="_blank" >the Mubasic Webapp</a> to make this monstrosity. Audio made with <a href="https://www.audacityteam.org/" target="_blank" >Audacity</a>.
            </p>
        </div>
    </div>
}