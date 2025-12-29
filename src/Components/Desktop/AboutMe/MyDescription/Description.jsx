//Context
import { useContext } from "react";
import { LangContext } from "../../../../context/LangContext";

//styles
import './Description.css';

function Description() {
    const { t } = useContext(LangContext);
    return (
        <div className="decriptionContainer">
            <div className="centerM">
                <p>{t.info.title}</p>
                <h3>Pablo Agustín Valdez</h3>
            </div>
            <ul>
                <li>{t.info.description1}</li>
                <li>{t.info.description2}</li>
                <li>{t.info.description3}</li>
                <li>{t.info.description4}</li>
                <li>{t.info.description5}</li>
            </ul>
        </div>
    )
}

export default Description