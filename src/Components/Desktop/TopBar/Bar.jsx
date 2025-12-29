//Context
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

//styles
import './Bar.css';

function Bar() {

    const { lang, setLang } = useContext(LangContext);

    const { t } = useContext(LangContext);

    return (
        <nav className='MenuBar'>
            <a href="#home">{t.menu.home}</a>
            <a href="#about">{t.menu.about}</a>
            <a href="#skills">{t.menu.skills}</a>
            <a href="#projects">{t.menu.projects}</a>
            <a href="#contact">{t.menu.contact}</a>
            <div>
                <button
                    onClick={() => setLang(lang === "es" ? "en" : "es")}
                    className="langBtn"
                >
                    {lang === "es" ? "EN" : "ES"}
                </button>
            </div>
        </nav>
    )
}

export default Bar