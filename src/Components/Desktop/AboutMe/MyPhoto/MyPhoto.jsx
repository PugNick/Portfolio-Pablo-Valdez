//imagenes
import Photo from '../../../../Images/Foto-Curriculum.jpg';

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