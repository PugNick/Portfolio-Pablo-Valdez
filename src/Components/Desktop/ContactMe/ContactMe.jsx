import { useState } from 'react';

//Context
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

//icons
import WhatsApp from '../../../Icons/WhatsApp';
import Copy from '../../../Icons/Copy';


import './ContactMe.css';

function ContactMe() {

    const [copied, setCopied] = useState(false);
    const email = "pablov.dev03@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
    };

    const { t } = useContext(LangContext);

    return (
        <div className='contactMeContainer'>
            <div className='titleContainer'>
                <p>{t.contact.title}</p>
            </div>
            <h3>{t.contact.description}</h3>
            <div className="contactFlex">
                <a
                    href="https://api.whatsapp.com/send?phone=543884049460" target="_blank" rel="noopener noreferrer"
                    className='whatsAppContainer'>
                    <WhatsApp />
                    <p >WhatsApp</p>
                </a>
                <div className='emailContainer'>
                    <p>{email}</p>
                    <button onClick={handleCopy} className="copyButton">
                        {copied ? (
                            <div className="copied">
                                <Copy />
                            </div>
                        ) : (
                            <div className="copy">
                                <Copy />
                            </div>
                        )}

                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactMe