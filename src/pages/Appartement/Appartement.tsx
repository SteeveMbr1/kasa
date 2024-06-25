import Dropdown from "@components/Dropdown/Dropdown.tsx";
import "./Appartement.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RateStars from "@components/RateStars/RateStars.tsx";
import Carrousel from "@components/Carousel/Carousel";
import { fetchById } from "@src/services/services.ts";

interface Host {
    name: string;
    picture: string;
}

interface Accommodation {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: Host;
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
}

export default function Appartement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [appart, setAppart] = useState<Accommodation>();

    useEffect(() => {
        _init()
    }, []);


    async function  _init() {
        const logement = await fetchById(id)

        if ( logement === undefined ) {
            navigate('404')
        }

        setAppart(logement)
    }

    if (appart === undefined) {
        return <>Loading</>
    }

    return (
        <>
            <Carrousel>
                {appart.pictures}
            </Carrousel>
            <main className="container">
                <aside className="description">
                    <h1 className="title">{ appart.title }</h1>
                    <p className="location">{ appart.location }</p>
                    <ul className="tags-list">
                        { appart.tags?.map((e, i) => <li key={i}>{e}</li> ) }
                    </ul>
                </aside>
                <aside className="host">
                <RateStars rate={appart.rating}/>
                <div className="owner">
                        <span className="name">{ appart.host?.name }</span>
                        <img className="picture" src={ appart.host?.picture }></img>
                    </div>
                </aside>
            </main>
            <section className="details">
                <Dropdown title="Description">{ appart?.description }</Dropdown>
                <Dropdown title="Équipement">{ appart.equipments?.map( (e, i) => <li key={i}>{e}</li> ) } </Dropdown>
            </section>
        </>
    );
}
