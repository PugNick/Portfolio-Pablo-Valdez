import { useState } from "react";
//Context
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

//icons
import Bars from "../../../Icons/Bars"
import Close from '../../../Icons/xMark';

//styles
import './SideBar.css';

function SideBar() {
    const { lang, setLang } = useContext(LangContext);
    const { t } = useContext(LangContext);

    const [isOpen, setIsOpen] = useState(false);

    const openBar = () => {
        setIsOpen(true);
    };

    const closeBar = () => {
        setIsOpen(false);
    };

    return (
        <nav className="sideBarContainer">
            <button onClick={openBar} className="toggleButton">
                <Bars />
            </button>
            <div className={`slideContainer ${isOpen ? 'show' : 'hide'}`}>
                <div className="closeButton">
                    <button onClick={closeBar}>
                        <Close />
                    </button>
                </div>
                <div className="sideBarContent">
                    <a onClick={closeBar} href="#homeM">{t.menu.home}</a>
                    <a onClick={closeBar} href="#about">{t.menu.about}</a>
                    <a onClick={closeBar} href="#skills">{t.menu.skills}</a>
                    <a onClick={closeBar} href="#projects">{t.menu.projects}</a>
                    <a onClick={closeBar} href="#contact">{t.menu.contact}</a>
                </div>
            </div>
            <div className="langContainerMobile">
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

export default SideBar


