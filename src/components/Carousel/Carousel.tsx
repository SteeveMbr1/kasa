import { Children, useState } from 'react';
import "./Carousel.scss";

export default function Carousel({ children } : { children : any }) {
    const [slide, setSlide] = useState(0);

    function next() {
        setSlide((s) => {
            return s - 1 < 0 ? Children.count(children) - 1 : s - 1;
        })
    }

    function prev() {
        setSlide((s) => {
            return s + 1 < Children.count(children) ? s + 1 : 0;
        })
    }

    return (
        <div className="carousel">
            <div className="slides">
                { Children.map( children, (e, i) => {
                    const cls = (i == slide) ? "item current" : "item";
                    return <div className={cls}>{e}</div>
                }) }
            </div>
            { Children.count(children) > 1 && 
            (<>
                <div className="next-btn" onClick={next}></div>
                <div className="prev-btn" onClick={prev}></div>
            </>) 
            }
        </div>
    );
}
