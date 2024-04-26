import "./HeroRight.Style.scss"
import MusicNote from "./MusicNote/MusicNote"
// audio clips below
import chacha from "../../../assets/sounds/chacha.wav";
import ahh from "../../../assets/sounds/ahh.wav";
import boing from "../../../assets/sounds/boing.wav";
import done from "../../../assets/sounds/done.wav";
import foive from "../../../assets/sounds/foive.wav";
import jangle from "../../../assets/sounds/jangle.wav";
import kelm from "../../../assets/sounds/kelm.wav";

export default function RightHero(){
    return <div id="hero__right">
        <MusicNote noteText={`a`} audioClip={ahh} />
        <MusicNote noteText={`b`} audioClip={boing} />
        <MusicNote noteText={`c`} audioClip={chacha} />
        <MusicNote noteText={`d`} audioClip={done} />
        <MusicNote noteText={`e`} audioClip={jangle} />
        <MusicNote noteText={`x`} audioClip={foive} />
        <MusicNote noteText={`y`} audioClip={kelm} />
    </div>
}