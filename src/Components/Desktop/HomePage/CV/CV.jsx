//Context
import { useContext } from "react";
import { LangContext } from "../../../../context/LangContext";

//styles
import './CV.css';

function CV() {
    const { t } = useContext(LangContext);
    return (
        <div className='downloadContainer'>
            <a href="/Pablo_Valdez_Frontend_Developer.pdf" download> {t.hero.CV}</a>
        </div>
    )
}

export default CV