//Components
import Linkedin from "../../../../Icons/Linkedin"
import GitHub from '../../../../Icons/GitHub';

//Styles
import './Hello.css';

function Hello() {
    return (
        <div>
            <p className="helloP">👋 ¡Hola!</p>
            <h2 className="myName">Pablo Valdez</h2>
            <p className="applying">Desarrollador Frontend</p>
            <div className="links">

                <a href="https://www.linkedin.com/in/pablo-valdez-720439276/" target="_blank">
                    <Linkedin />
                </a>
                <a href="https://github.com/PugNick" target="_blank">
                    <GitHub />
                </a>
            </div>
        </div>
    )
}

export default Hello


