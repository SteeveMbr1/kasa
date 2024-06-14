import HeroBanner from "../../components/HeroBanner/HeroBanner";
import image from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpeg"
import Dropdown from "../../components/Dropdown/Dropdown";

export default function About() {
  return (
    <>
    <HeroBanner image={image} opacity={.3}></HeroBanner>
    <div className="about-drop-down">
         <ul>
            <li>
                <Dropdown title='lorem ipsum'>Lorem ipsum dolor sit amet consectetur.</Dropdown>
            </li>
            <li>
                <Dropdown title='lorem ipsum'>Lorem ipsum dolor sit amet consectetur.</Dropdown>
            </li>
            <li>
                <Dropdown title='lorem ipsum'>Lorem ipsum dolor sit amet consectetur.</Dropdown>
            </li>
         </ul>
    </div>
    </>
  )
}
