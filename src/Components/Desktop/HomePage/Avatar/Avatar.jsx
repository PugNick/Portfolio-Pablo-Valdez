//Components

//images
import AvatarImage from '../../../../Images/Avatar-Portfolio.svg';

//styles
import './Avatar.css';

function Avatar() {
    return (
        <div className='avatarContainer'>
            <img src={AvatarImage} alt="" />
        </div>
    )
}

export default Avatar