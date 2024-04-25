import "./LoaderLeft.style.scss"

function LeftLoader(){
    let block0Class = "";
    let block1Class = "hidden";
    const block1Timer = 950;
    
    let block2Class = "hidden";
    const block2Timer = 1200;
    
    
    self.setTimeout(() => {
        const block0 = document.getElementById("loader__left--block-0");
        const block1 = document.getElementById("loader__left--block-1");
        const block2 = document.getElementById("loader__left--block-2");
        
        block0.className = "hidden"
        block1Class = "";
        block1.className = block1Class;
        console.log(`block class ${block1Class}`);
        console.log(`classname ${block1.className}`);
        console.log("trigger 1");
        
        self.setTimeout(() => {
            console.log("trigger 2");
            block1Class = "hidden";
            block1.className = block1Class;
            
            block2Class = "";
            block2.className = block2Class;
        }, block2Timer);
    }, block1Timer);

    return <div id="loader__left">
        <div id="loader__left--block-0" className={block0Class} >
        </div>
        <div id="loader__left--block-1" className={block1Class} >
        </div>
        <div id="loader__left--block-2" className={block2Class} >
        </div>
    </div>
}

export default LeftLoader;