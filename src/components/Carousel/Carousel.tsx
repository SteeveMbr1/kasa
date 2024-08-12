import { useState } from "react";
import "./Carousel.scss"

export default function Carousel({imagesList} : {imagesList : string[]}) {

    const [current, setCurrent] = useState<number>(0);
    const listLenght = imagesList.length;

    function handleNext(): void {
        setCurrent((current) => (current + 1) % listLenght );
    }

    function handlePrev(): void {
        setCurrent((current) => (current - 1 + listLenght) % listLenght );
    }

  return (
    <div className="carrousel">
        <div className="items">
            {imagesList.map((imgSrc, i) => {
                return <div key={i} className={`item-container ${current == i && 'current'}`} ><img src={imgSrc} alt=""/></div>
            })}
        </div>
        {imagesList.length > 1 && (
            <>
                <span className="carrousel-arrow left" onClick={handlePrev}>&#x276E;</span>
                <span className="carrousel-arrow right" onClick={handleNext}>&#x276F;</span>
                <span className="show-current">{current+1 + '/' + listLenght}</span>
            </>
        )}
    </div>
  )
}
