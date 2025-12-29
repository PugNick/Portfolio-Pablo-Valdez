//Context
import { useContext } from "react";
import { LangContext } from "../../../../context/LangContext";

//styles
import './CV.css';

function CV() {
    const { t } = useContext(LangContext);
    return (
        <div className='downloadContainer'>
            <a href="/Currículum Vitae.pdf" download> {t.hero.CV}</a>
        </div>
    )
}

export default CV