//Components
import Hello from './Hello/Hello';
import Avatar from './Avatar/Avatar';
import CV from './CV/CV';

//Styles
import './HomePage.css';

function HomePage() {
    return (
        <div className='homeFlex'>
            <div className="helloContainer">
                <Hello />
            </div>
            <div className="avatarContainer">
                <Avatar />
            </div>
            <div className="CVContainer">
                <CV />
            </div>
        </div>
    )
}

export default HomePage