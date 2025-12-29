import { useState, useRef, useEffect } from 'react';

//Context
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

//components
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectCardImg from './ProjectCardImg/ProjectCardImg';

//iconos
import ReactIcon from '../../../Icons/ReactIcon';
import JSIcon from '../../../Icons/JS';
import HTMLIcon from '../../../Icons/HTML';
import CSSIcon from '../../../Icons/CSS';

//images
import Vestire from '../../../Images/images-card/Vestire-Photo-Card.png';
import Space from '../../../Images/images-card/Space-Travel.png';
import ManagerBoard from '../../../Images/images-card/Task-Manager.png';
import ShoeStore from '../../../Images/images-card/Sneakers.png';

//styles
import './PersonalProjects.css';

function PersonalProjects() {

    const { t } = useContext(LangContext);

    const [activeCard, setActiveCard] = useState(null);

    // Refs individuales
    const vestireRef = useRef(null);
    const spaceRef = useRef(null);
    const managerRef = useRef(null);
    const shoeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                vestireRef.current && !vestireRef.current.contains(e.target) &&
                spaceRef.current && !spaceRef.current.contains(e.target) &&
                managerRef.current && !managerRef.current.contains(e.target) &&
                shoeRef.current && !shoeRef.current.contains(e.target)
            ) {
                setActiveCard(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='personalProjectsContainer'>
            <div className='titleContainer'>
                <p>{t.projects.title}</p>
            </div>
            <h2>{t.projects.subtitle}</h2>
            <div className="projectsCardContainer">

                {/* VESTIRE */}
                <div className="projectL" ref={vestireRef}>
                    <div
                        className={`imgContainerL ${activeCard === 'vestire' ? 'behind' : 'front'}`}
                        onClick={() => setActiveCard('vestire')}
                    >
                        <ProjectCardImg image={Vestire} />
                    </div>
                    <div
                        className={`dataContainerL ${activeCard === 'vestire' ? 'front' : 'behind'}`}
                        onClick={() => setActiveCard(null)}
                    >
                        <ProjectCard
                            title="Vestire"
                            description={t.projects.vestire.description}
                            link="https://vestiree.netlify.app/"
                            techs={[<ReactIcon />, <JSIcon />, <HTMLIcon />, <CSSIcon />]}
                        />
                    </div>
                </div>

                {/* SPACE TOURISM */}
                <div className="projectR" ref={spaceRef}>
                    <div
                        className={`dataContainerR ${activeCard === 'space' ? 'front' : 'behind'}`}
                        onClick={() => setActiveCard(null)}
                    >
                        <ProjectCard
                            title="Space Tourism"
                            description={t.projects.space.description}
                            link="https://space-travel-now.netlify.app/"
                            techs={[<ReactIcon />, <JSIcon />, <HTMLIcon />, <CSSIcon />]}
                        />
                    </div>
                    <div
                        className={`imgContainerR ${activeCard === 'space' ? 'behind' : 'front'}`}
                        onClick={() => setActiveCard('space')}
                    >
                        <ProjectCardImg image={Space} />
                    </div>
                </div>

                {/* MANAGER BOARD */}
                <div className="projectL" ref={managerRef}>
                    <div
                        className={`imgContainerL ${activeCard === 'manager' ? 'behind' : 'front'}`}
                        onClick={() => setActiveCard('manager')}
                    >
                        <ProjectCardImg image={ManagerBoard} />
                    </div>
                    <div
                        className={`dataContainerL ${activeCard === 'manager' ? 'front' : 'behind'}`}
                        onClick={() => setActiveCard(null)}
                    >
                        <ProjectCard
                            title="Manager Board"
                            description={t.projects.manager.description}
                            link="https://manager-board.netlify.app/"
                            techs={[<ReactIcon />, <JSIcon />, <HTMLIcon />, <CSSIcon />]}
                        />
                    </div>
                </div>

                {/* SHOE STORE */}
                <div className="projectR" ref={shoeRef}>
                    <div
                        className={`dataContainerR ${activeCard === 'shoe' ? 'front' : 'behind'}`}
                        onClick={() => setActiveCard(null)}
                    >
                        <ProjectCard
                            title="Shoe Store"
                            description={t.projects.shoe.description}
                            link="https://shoe-e-commercee.netlify.app/"
                            techs={[<ReactIcon />, <JSIcon />, <HTMLIcon />, <CSSIcon />]}
                        />
                    </div>
                    <div
                        className={`imgContainerR ${activeCard === 'shoe' ? 'behind' : 'front'}`}
                        onClick={() => setActiveCard('shoe')}
                    >
                        <ProjectCardImg image={ShoeStore} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PersonalProjects;
