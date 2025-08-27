import { useState } from 'react';

//icons
import WhatsApp from '../../../Icons/WhatsApp';
import Copy from '../../../Icons/Copy';


import './ContactMe.css';

function ContactMe() {

    const [copied, setCopied] = useState(false);
    const email = "pablovjujuy@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
    };


    return (
        <div className='contactMeContainer'>
            <div className='titleContainer'>
                <p>💬 Contactame</p>
            </div>
            <h3>Si tenés alguna consulta, propuesta o por cualquier motivo, estoy a disposición!
                <br />
                Podés contactarme por:
            </h3>
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