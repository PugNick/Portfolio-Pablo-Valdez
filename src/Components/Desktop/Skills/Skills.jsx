//iconos
import ReactIcon from '../../../Icons/ReactIcon';
import JS from '../../../Icons/JS';
import CSS from '../../../Icons/CSS';
import HTML from '../../../Icons/HTML';

//styles
import './Skills.css';

function Skills() {
    return (
        <div className='skillsContainer'>
            <div className="titlleContainer">
                <p>🧑‍💻 Skills & Tecnologías</p>
            </div>
            <h2>Tecnologías</h2>
            <div className='skillsIcons'>
                <ReactIcon />
                <JS />
                <CSS />
                <HTML />
            </div>
            <div className='this'>
                <p>Este portfolio fue desarrollado con React, Vite, CSS, y desplegado en Netlify.</p>
            </div>
        </div>
    )
}

export default Skills