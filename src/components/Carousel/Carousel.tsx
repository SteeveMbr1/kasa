import { Children, useState } from 'react';
import "./Carousel.scss";

export default function Carousel({ children } : { children : any }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childLenght = Children.count(children);

    const nextIndex = () => {
        return (currentIndex + 1) % childLenght
    }

    const prevIndex = () => {
        return (currentIndex - 1 + childLenght) % childLenght
    }

    const handlePrev = () => {
        setCurrentIndex(prevIndex);
    };

    const handleNext = () => {
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="carousel">
            { Children.map(children, (e, i) => {
                const stat = i == currentIndex ? 'current' : i == prevIndex() ? 'prev' : i == nextIndex() ? 'next' : '';
                return (<>
                        <div key={i} className={`carousel-image-container ${stat}`}>
                            <img src={e} alt={`Slide ${i}`} className="carousel-image" />
                        </div>
                        {i == currentIndex && <span className="info">{`${currentIndex+1}/${childLenght}`}</span>}
                    </>);
            } ) }
            <button className="carousel-button prev-button" onClick={handlePrev}>
                &#10094;
            </button>
            <button className="carousel-button next-button" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
}
