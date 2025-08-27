import React from 'react'

//icons
import Linkedin from '../../../Icons/Linkedin';
import GitHub from '../../../Icons/GitHub';

//styles
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="footerContent">
                <div className="copyright">
                    <p>Copyright © Pablo Valdez. {new Date().getFullYear()}</p>
                </div>
                <div className="socialLinks">
                    <div className="linkedInFooter">
                        <a href="https://www.linkedin.com/in/pablo-valdez-720439276/" target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                        </a>
                    </div>
                    <div className="gitHubFooter">
                        <a href="https://github.com/PugNick" target="_blank" rel="noopener noreferrer">
                            <GitHub />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer