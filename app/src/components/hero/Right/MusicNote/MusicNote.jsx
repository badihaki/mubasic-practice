import "./MusicNote.style.scss"

export default function MusicNote({ noteText, audioClip }){
    function handlePlaySound(){
        console.log("SOUND!!")
        if(audioClip){
            new Audio(audioClip).play();
        }
    }

    function handleKeyboardSound(e){
        console.log(e);
    }


    return <div id={`note-${noteText}`} className="music-note" onClick={handlePlaySound} onKeyDown={handleKeyboardSound} >
        <p>{noteText.toUpperCase()}</p>
    </div>
}