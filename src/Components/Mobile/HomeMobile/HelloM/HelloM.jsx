//styles
import './HelloM.css';

function HelloM() {
    return (
        <div>
            <div className="centerHello">
                <p className='saludoM'>👋 ¡Hola!</p>

                <div className="nameCV">
                    <h3>Pablo Valdez</h3>
                    <p>Desarrollador Frontend</p>
                    <a href='/Currículum Vitae.pdf' download>Descargar CV</a>
                </div>
            </div>
        </div>
    )
}

export default HelloM