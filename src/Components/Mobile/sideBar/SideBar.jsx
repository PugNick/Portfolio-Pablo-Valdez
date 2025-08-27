import { useState } from "react";

//icons
import Bars from "../../../Icons/Bars"
import Close from '../../../Icons/xMark';

//styles
import './SideBar.css';

function SideBar() {

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
                    <a onClick={closeBar} href="#homeM">Inicio</a>
                    <a onClick={closeBar} href="#about">Sobre mí</a>
                    <a onClick={closeBar} href="#skills">Tecnologías</a>
                    <a onClick={closeBar} href="#projects">Proyectos</a>
                    <a onClick={closeBar} href="#contact">Contacto</a>
                </div>
            </div>

        </nav>
    )
}

export default SideBar


