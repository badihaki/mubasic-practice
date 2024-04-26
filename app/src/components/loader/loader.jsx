import LeftLoader from "./left/LoaderLeft";
import "./loader.scss";
import RightLoader from "./right/LoaderRight";

function Loader(){
    let classText = "";
    const animationWaitTime = 5800;

    self.setTimeout(() => {
        classText = "hidden";
        const loader = document.getElementById("loader");
        loader.className = classText;
    }, animationWaitTime);

    return <div id="loader" className={classText} >
        <LeftLoader />
        <RightLoader />
    </div>
}

export default Loader;