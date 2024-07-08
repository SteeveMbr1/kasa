import HeroBanner from '@components/HeroBanner/HeroBanner';
import AppartmentCard from '@components/AppartmentCard/AppartmentCard.tsx';
import image from '@assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg'
import './Home.scss'
import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accommodation } from '@interfaces/Accommodation.tsx';

export default function Home() {

    const [biens, setBiens] = useState<Accommodation[]>([]);
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
            <div className="appartments-list">
                {biens.map(appart => {
                    return (<AppartmentCard key={appart.id} cover={appart.cover} title={appart.title} clickEvent={clikedOn} link={'/appartement/' + appart.id} />)
                })}
            </div>
        </>
    )
}