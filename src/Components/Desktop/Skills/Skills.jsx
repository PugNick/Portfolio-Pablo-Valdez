//Context
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

//iconos
import ReactIcon from '../../../Icons/ReactIcon';
import JS from '../../../Icons/JS';
import CSS from '../../../Icons/CSS';
import HTML from '../../../Icons/HTML';

//styles
import './Skills.css';

function Skills() {
    const { t } = useContext(LangContext);
    return (
        <div className='skillsContainer'>
            <div className="titlleContainer">
                <p>{t.skills.title}</p>
            </div>
            <h2></h2>
            <div className='skillsIcons'>
                <ReactIcon />
                <JS />
                <CSS />
                <HTML />
            </div>
            <div className='this'>
                <p>{t.skills.description}</p>
            </div>
        </div>
    )
}

export default Skills