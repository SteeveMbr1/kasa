import HeroBanner from "@components/HeroBanner/HeroBanner";
import image from "@assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpeg"
import Dropdown from "@components/Dropdown/Dropdown";
import './About..scss';

export default function About() {
  return (
    <>
    <HeroBanner image={image} opacity={.3}></HeroBanner>
    <div className="about-drop-down">
         <ul>
            <li>
                <Dropdown title='Fiabilité'>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </Dropdown>
            </li>
            <li>
                <Dropdown title='Respect'>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Dropdown>
            </li>
            <li>
                <Dropdown title='Service'>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Dropdown>
            </li>
            <li>
                <Dropdown title='Sécurité'>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Dropdown>
            </li>
         </ul>
    </div>
    </>
  )
}
