import LeftLoader from "./left/LoaderLeft";
import "./loader.scss";

function Loader(){
    let classText = "";
    // const animationWaitTime = 2950;

    // self.setTimeout(() => {
    //     classText = "hidden";
    //     const loader = document.getElementById("loader");
    //     loader.className = classText;
    // }, animationWaitTime);

    return <div id="loader" className={classText} >
        <LeftLoader />
    </div>
}

export default Loader;