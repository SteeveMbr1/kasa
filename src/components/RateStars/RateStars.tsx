import "./RateStars.scss"
import star from "../../assets/icons/star.svg";
import star_active from "../../assets/icons/star-active.svg";

export default function RateStars({ rate } : { rate : string|number }) {

    const _rate = Number(rate);
    const stars = Array(5).fill(star).fill(star_active, 0, _rate);

    return (
        <div className="rating-stars">
            <ul className="rate">
                {stars.map( (e, i) => {
                    return (
                        <li key={i} className="star"><img src={e} alt={`Rate of ${i+1}/5`} /></li>
                    )
                } )}
            </ul>
        </div>
    );
}
