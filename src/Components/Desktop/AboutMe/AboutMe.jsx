//components
import MyPhoto from './MyPhoto/MyPhoto';
import MyDescrption from './MyDescription/Description';

//styles
import './AboutMe.css';

function AboutMe() {
    return (
        <div className='descriptionContaioner'>
            <div className="photo">
                <MyPhoto />
            </div>
            <div className="description">
                <MyDescrption />
            </div>
        </div>
    )
}

export default AboutMe