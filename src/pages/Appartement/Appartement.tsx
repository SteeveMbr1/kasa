import Dropdown from "@components/Dropdown/Dropdown.tsx";
import RateStars from "@components/RateStars/RateStars.tsx";
import Carrousel from "@components/Carousel/Carousel";
import { fetchById } from "@src/services/services.ts";
import { Accommodation } from "@interfaces/Accommodation.tsx";
import "./Appartement.scss";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function Appartement() {
    const appart = useLoaderData() as Accommodation;
    const { id } = useParams();
    const navigate = useNavigate();
    // const [appart, setAppart] = useState<Accommodation>();

    // useEffect(() => {
    //     _init()
    // }, []);


    // async function  _init() {
    //     const json = await fetchById(id)

    //     if ( json === undefined ) {
    //         navigate('404')
    //     }

    //     setAppart(json)
    // }

    if (appart === undefined) {
        return <>Loading...</>
    }

    return (
        <>
            <Carrousel imagesList={appart.pictures} />
            <div className="appartment-container">
                <div className="appartment-infos">
                    <div className="title-location">
                        <h1 className="title">{appart.title}</h1>
                        <div className="location">{appart.location}</div>
                    </div>
                    <ul className="tags">
                        {appart?.tags.map((tag : string, i : number) => {
                            return <li key={i} className="tag">{tag}</li>
                        })}
                    </ul>
                </div>
                <div className="owner">
                    <RateStars rate={appart.rating} />
                    <div className="host">
                        <div className="name">{appart?.host.name}</div>
                        <img className="picture" src={appart?.host.picture} alt="host piscture"/>
                    </div>
                </div>
            </div>
            <section className="details">
                <Dropdown title="Description">{ appart.description }</Dropdown>
                <Dropdown title="Équipement">{ appart?.equipments.map( (e, i) => <li key={i}>{e}</li> ) } </Dropdown>
            </section>
        </>
    );
}
