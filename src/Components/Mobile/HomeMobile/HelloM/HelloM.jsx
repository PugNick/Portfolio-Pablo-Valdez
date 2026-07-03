//Context
import { useContext } from "react";
import { LangContext } from "../../../../context/LangContext";

//styles
import './HelloM.css';

function HelloM() {
    const { t } = useContext(LangContext);
    return (
        <div>
            <div className="centerHello">
                <p className='saludoM'>{t.hero.greeting}</p>

                <div className="nameCV">
                    <h3>Pablo Valdez</h3>
                    <p>{t.hero.role}</p>
                    <a href='/Pablo_Valdez_Frontend_Developer.pdf' download>{t.hero.CV}</a>
                </div>
            </div>
        </div>
    )
}

export default HelloM