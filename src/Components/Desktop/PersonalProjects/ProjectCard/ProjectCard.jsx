import ProTypes from 'prop-types';

//styles
import './ProjectCard.css';

export default function ProjectCard({ title, link, description, techs }) {
    return (
        <div className='projectCardContainer'>

            <div className="infoCardContainer">
                <div className="paddingCard">

                    <div>
                        <h3>
                            <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                        </h3>
                    </div>

                    <p>{description}</p>
                    <div className="techIconsContainer">
                        {techs && techs.map((icon, index) => (
                            <span key={index} className='techIcon'>{icon}</span>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

ProjectCard.propTypes = {
    title: ProTypes.string.isRequired,
    description: ProTypes.string,
    link: ProTypes.string.isRequired,
    techs: ProTypes.arrayOf(ProTypes.node)
};