import { useState, useEffect } from 'react';
import Modal from 'src/components/Modal/Modal.jsx' // Импорт компонента Modal
import 'Blog.css'

function Blog() {
    const [planets, setPlanets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);


    useEffect(() => {
        fetch('https://swapi.dev/api/planets/?page=1')
            .then(response => response.json())
            .then(data => setPlanets(data.results));
    }, []);

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(planet);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h2>Планеты Звёздных войн</h2>
            <ul>
                {planets.map((planet, index) => (
                    <li key={index} onClick={() => handlePlanetClick(planet)}>
                        <div className="planet-card">
                            <h3>{planet.name}</h3>
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.url.split('/')[5]}.jpg`} alt={planet.name} />
                        </div>
                    </li>
                ))}
            </ul>
            {showModal && (
                <Modal
                    planet={selectedPlanet}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}


export default Blog;