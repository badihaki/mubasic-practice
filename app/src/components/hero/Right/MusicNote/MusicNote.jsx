import { useEffect } from "react";
import "./MusicNote.style.scss"

export default function MusicNote({ noteText, audioClip }){
    useEffect( () => {
        document.addEventListener('keydown', handleKeyboardSound);
    }, [] )
    
    function handlePlaySound(){
        console.log("SOUND!!")
        if(audioClip){
            new Audio(audioClip).play();
        }
    }

    function handleKeyboardSound(e){
        // console.log(e.key);
        if(e.key === noteText){
            console.log("play sound");
            handlePlaySound();
        }
    }


    return <div id={`note-${noteText}`} className="music-note" onClick={handlePlaySound} >
        <p>{noteText.toUpperCase()}</p>
    </div>
}