import "./loader.scss";

function Loader(){
    let classText = "";
    const animationWaitTime = 2500;

    self.setTimeout(() => {
        classText = "hidden";
        const loader = document.getElementById("loader");
        loader.className = classText;
    }, animationWaitTime);

    return <div id="loader" className={classText} >
        <h1>Loader</h1>
    </div>
}

export default Loader;