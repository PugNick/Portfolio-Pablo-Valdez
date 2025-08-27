//imagen
import AvatarImageM from '../../../../Images/Avatar-Portfolio.svg';

//icons
import Linkedin from "../../../../Icons/Linkedin"
import GitHub from "../../../../Icons/GitHub"

//styles
import './AvatarIconsM.css';

function AvatarIconsM() {
    return (
        <div>
            <div className="iconsM">
                <a href="https://www.linkedin.com/in/pablo-valdez-720439276/" target="_blank">
                    <Linkedin />
                </a>
                <a href="https://github.com/PugNick" target="_blank">
                    <GitHub />
                </a>
            </div>
            <div className="avatarM">
                <div className="avatarImgContainer">
                    <img src={AvatarImageM} alt="Avatar del portfolio" />
                </div>
            </div>
        </div>
    )
}

export default AvatarIconsM