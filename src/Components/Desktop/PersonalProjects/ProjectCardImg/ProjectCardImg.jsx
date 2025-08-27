import ProTypes from 'prop-types';

//styles
import './ProjectCardImg.css';

export default function ProjectCardImg({ image }) {
    return (
        <div className='imageCardContainer'>
            <img src={image} alt="Project" />
        </div>
    );
}

ProjectCardImg.propTypes = {
    image: ProTypes.string.isRequired
};