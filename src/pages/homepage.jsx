import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Card, Button, Form, FormControl } from 'react-bootstrap';
import Pichu from '../images/dZXgpxgwg3MgcqzgLeS5JZ-1200-80.jpg.webp'

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState([]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        fetch('https://api.pokemontcg.io/v2/cards', {
            headers: {
                'X-Api-Key': process.env.POKEMON_API_KEY
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`API call failed with status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("API Response:", data);
                if (data.data && data.data.length > 0) {
                    console.log("Sample Card:", data.data[0]);
                } else {
                    console.log("No cards found in the response");
                }

                const filteredCards = data.data.filter(card =>
                    card.set.name === "Sword & Shield"
                );

                console.log("Filtered Cards:", filteredCards);
                setCards(filteredCards);
                setIsLoading(false);
            })
            .catch(error => console.error("Fetch error:", error));
    }, []);



    return (
        <div>
            <Navbar bg="danger" variant="dark" expand="lg">
            </Navbar>
            <div className="d-flex justify-content-center my-4">
                <div className="custom-header rounded-lg shadow" style={{ maxWidth: '90%', overflow: 'hidden', borderRadius: '20px' }}>
                    <header className="bg-dark py-5" style={{ backgroundImage: `url(${Pichu})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px' }}>
                        <div className="container text-light">
                            <h1 className="display-4 font-weight-bold" style={{ WebkitTextStroke: '2px black', fontSize: '70px', fontWeight: '1000' }}>Welcome to Sleev'd</h1>
                            <p className="lead" style={{ WebkitTextStroke: '1px black', fontSize: '30px', fontWeight: '1000' }}>Your ultimate destination for trading and collecting Pokémon cards. Dive into a world where every card tells a story.</p>
                        </div>
                    </header>
                </div>
            </div>
            <main className="container my-5">
                <div className="row justify-content-center">
                    {isLoading ? (
                        <div className="progress w-100">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                        </div>
                    ) : (
                        shuffleArray([...cards]).slice(0, 3).map((card, index) => (
                            <div key={index} className="col-md-4 col-sm-6 mb-4">
                                <div className="card h-100">
                                    <div className="row g-0">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</p>
                                                <a href="#" className="btn btn-danger">See Review</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <img src={card.images.large || "https://via.placeholder.com/150"} className="img-fluid rounded-start p-2" alt="Placeholder" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;