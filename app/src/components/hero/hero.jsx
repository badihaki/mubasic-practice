import LeftHero from "./Left/HeroLeft.jsx";
import RightHero from "./Right/HeroRight.jsx";
import "./hero.scss";

export default function Hero(){
    return (
    <div id="hero">
        <LeftHero />
        <RightHero />
    </div>
    )
}