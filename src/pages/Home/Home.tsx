import HeroBanner from "../../components/HeroBanner/HeroBanner";
import image from '../../assets/images/eric-muhr-P_XxsdVgtpQ-unsplash.jpeg'
import './Home.scss'

export default function Home() {

    const image_url = 'images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpeg';
    const biens = Array(20).fill(
        {
            url: image_url,
            title: "Lorem ipsum dolor sit amet consectetur."
        }
    )

  return (
    <>
        <HeroBanner image={image} opacity={.6}>Chez vous, partout et ailleurs</HeroBanner>
        <div className="gallery-container">
            <ul className="cards">
                { biens.map( (bien, i) => {
                    return (
                        <li key={i}>
                        <div className="card" style={{
                            backgroundImage: `url(${bien.url})`,
                        }}>
                            <p className="title">{bien.title}</p>
                        </div>
                    </li>
                    );
                }) }

            </ul>
        </div>
    </>
  )
}