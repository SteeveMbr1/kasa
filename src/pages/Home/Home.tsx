import HeroBanner from '@components/HeroBanner/HeroBanner';
import image from '@assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg'
import './Home.scss'
import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [biens, setBiens] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('datas/logements.json')
            .then(response => response.json())
            .then(data => setBiens(data))

    }, []);

    function clikedOn(event: MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        event.preventDefault();
        const nav = event.currentTarget.getAttribute('href') as string;
        navigate(nav);
    }

    return (
        <>
            <HeroBanner image={image} opacity={.6}>Chez vous, partout et ailleurs</HeroBanner>
            <div className="gallery-container">
                <ul className="cards">
                    {biens.map((bien) => {
                        return (
                            <li key={bien.id} >
                                <div className="card">
                                    <a href={`/appartement/${bien.id}`} onClick={clikedOn}></a>
                                    <img src={bien.cover} alt="" />
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