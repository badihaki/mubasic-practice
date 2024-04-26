import "./LoaderRight.style.scss"

export default function RightLoader(){
    const loadingText = "Loading...".split("");
    
    self.setTimeout(()=>{
        const letterContainer = document.getElementById("loader__right--letter-container");
        let textTimer = 0;
        let timeToAdd = 150;
        let counter = 0;

        loadingText.forEach( (letter)=>{
            // first timeout is for creating the letter
            const newLetterDOM = document.createElement("span");
            
            newLetterDOM.innerHTML = letter;
            newLetterDOM.className = "letter-hidden";
            letterContainer.appendChild(newLetterDOM);
            self.setTimeout( ()=>{
                
                // this second is for placing it in the right spot
                self.setTimeout( ()=>{
                    newLetterDOM.className = "";
                    counter++;
                    if(counter === loadingText.length - 1){
                        self.setTimeout( ()=>{
                            document.getElementById("loader__right--box").className = "full";
                            letterContainer.className = "hidden";
                        }, 1850 )
                    }
                } , textTimer)
                textTimer = textTimer + timeToAdd;
            }, textTimer )

        } )
    }, 350)
    
    return <div id="loader__right">
        <div id="loader__right--letter-container"></div>
        <div id="loader__right--box" className=""></div>
    </div>
}