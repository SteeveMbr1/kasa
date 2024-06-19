import Dropdown from "@components/Dropdown/Dropdown.tsx";
import logements from "@src/utils/logements";
import "./Appartement.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RateStars from "@components/RateStars/RateStars.tsx";

export default function Appartement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [appart, setAppart] = useState({});

    useEffect(() => {
        _init()
    }, []);




    async function  _init() {
        const _apparts = await logements(id)

        if ( !_apparts ) {
            navigate('404', {replace : true})
        }

        setAppart(_apparts)
    }

    return (
        <>
            <div className="carrousel">
                <img src={appart.cover } alt="" />
            </div>
            <main className="content">
                <aside>
                    <h1 className="title">{appart.title}</h1>
                    <p className="location">{appart.location}</p>
                    <ul className="tags-list">
                        {appart.tags?.map((e, i) => <li key={i}>{e}</li> )}
                    </ul>
                </aside>
                <aside>
                    <div className="host">
                        <span className="name">{ appart.host?.name }</span>
                        <img className="picture" src={ appart.host?.picture }></img>
                    </div>
                    <RateStars rate={3}/>
                </aside>
            </main>
            <section className="details">
                <Dropdown title="Description">{ appart?.description }</Dropdown>
                <Dropdown title="Équipement">{  appart.equipments?.map((e, i) => <li key={i}>{e}</li> ) } </Dropdown>
            </section>
        </>
    );
}
