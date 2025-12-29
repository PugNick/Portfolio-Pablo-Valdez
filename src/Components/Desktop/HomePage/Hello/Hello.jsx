//Context
import { useContext } from "react";
import { LangContext } from "../../../../context/LangContext";

//Components
import Linkedin from "../../../../Icons/Linkedin"
import GitHub from '../../../../Icons/GitHub';

//Styles
import './Hello.css';

function Hello() {
    const { t } = useContext(LangContext);
    return (
        <div>
            <p className="helloP">{t.hero.greeting}</p>
            <h2 className="myName">Pablo Valdez</h2>
            <p className="applying">{t.hero.role}</p>
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


