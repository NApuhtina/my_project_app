import './Modal.css'
import PropTypes from "prop-types";

function Modal({ planet, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{planet.name}</h2>
                <ul>
                    <li><strong>Диаметр:</strong> {planet.diameter}</li>
                    <li><strong>Население:</strong> {planet.population}</li>
                    <li><strong>Гравитация:</strong> {planet.gravity}</li>
                    <li><strong>Рельеф:</strong> {planet.terrain}</li>
                    <li><strong>Климат:</strong> {planet.climate}</li>
                </ul>
            </div>
        </div>
    );
}
Modal.propTypes = {
    planet: PropTypes.shape({ // Проверка типа planet - объект
        name: PropTypes.string.isRequired,
        diameter: PropTypes.string,
        population: PropTypes.string,
        gravity: PropTypes.string,
        terrain: PropTypes.string,
        climate: PropTypes.string
    }).isRequired,
    onClose: PropTypes.func.isRequired, // Проверка типа onClose - функция, обязательное поле
};

export default Modal;