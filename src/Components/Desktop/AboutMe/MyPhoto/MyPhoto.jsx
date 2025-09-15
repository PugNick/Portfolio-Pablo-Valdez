//imagenes
import Photo from '../../../../Images/foto-Curriculum.jpg';

//styles
import './MyPhoto.css';

function MyPhoto() {
    return (
        <div className='myPhotoContainer'>
            <img src={Photo} alt="America Psycho con gato" />
        </div>
    )
}

export default MyPhoto