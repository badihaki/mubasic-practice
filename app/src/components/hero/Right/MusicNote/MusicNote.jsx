import "./MusicNote.style.scss"

export default function MusicNote({ noteText }){
    return <div id={`note-${noteText}`} className="music-note">
        <p>{noteText.toUpperCase()}</p>
    </div>
}