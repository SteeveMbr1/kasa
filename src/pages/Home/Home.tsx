import HeroBanner from '@components/HeroBanner/HeroBanner';
import AppartmentCard from '@components/AppartmentCard/AppartmentCard.tsx';
import image from '@assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg'
import { Accommodation } from '@interfaces/Accommodation.tsx';
import './Home.scss'
import { MouseEvent } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function Home() {

    const apparts= useLoaderData() as Accommodation[];
    const navigate = useNavigate();

    function clikedOn(event: MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        event.preventDefault();
        const nav = event.currentTarget.getAttribute('href') as string;
        navigate(nav);
    }


    return (
        <>
            <HeroBanner image={image} opacity={.6}>Chez vous, partout et ailleurs</HeroBanner>
            <div className="appartments-list">
                {apparts.map(appart => {
                    return (<AppartmentCard key={appart.id} cover={appart.cover} title={appart.title} clickEvent={clikedOn} link={'/appartement/' + appart.id} />)
                })}
            </div>
        </>
    )
}