import logements from "@src/utils/logements";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function Appartement() {
    
    const {id} = useParams()
    const [appart, setAppart] = useState({})

    useEffect(() => {
        logements(id)
        .then(d => { console.log(d); return d } )
            .then( d => setAppart(d) )
    }, [])

  return (
    <>
        <div className="carrousel">

        </div>
        <h1 className="title">{appart.title}</h1>
        <p className="location">{appart.location}</p>
        <ul className="tags">
        </ul>
        {/* TODO : */}
        { appart.tags}
        <div className="host">
            <p className="name">Lorem, ipsum.</p>
            <div className="picture"></div>
        </div>

    </>
  )
}
