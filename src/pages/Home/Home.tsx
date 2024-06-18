import HeroBanner from '@components/HeroBanner/HeroBanner';
import image from '@assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg'
import './Home.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [biens, setBiens] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('datas/logements.json')
            .then(response => response.json())
            .then(data => setBiens(data))

    }, []);

    function clikedOn(e, bien) {
        navigate('appartement/' + bien.id, {replace : true});
    }

    return (
        <>
            <HeroBanner image={image} opacity={.6}>Chez vous, partout et ailleurs</HeroBanner>
            <div className="gallery-container">
                <ul className="cards">
                    {biens.map((bien) => {
                        return (
                            <li key={bien.id} onClick={(e) => clikedOn(e, bien)}>
                                <a href={`appartement/${bien.id}`}></a>
                                <div className="card" style={{
                                    backgroundImage: `url(${bien.cover})`,
                                }}>
                                    <p className="title">{bien.title}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}