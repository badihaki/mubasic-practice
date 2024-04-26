import "./HeroRight.Style.scss"
import MusicNote from "./MusicNote/MusicNote"
// audio clips below
import chacha from "../../../assets/sounds/chacha.wav";

export default function RightHero(){
    return <div id="hero__right">
        <MusicNote noteText={`a`} audioClip={chacha} />
    </div>
}