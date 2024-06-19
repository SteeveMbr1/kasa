import React from "react";

export default function RateStars({ rate } : { rate : string|number }) {

    function ratingStars(rate:string) {
        const _stars = [];
        const _rate = Number(rate);

        for (let index = 0; index < 5; index++) {
            index < _rate && _stars.push( <li key={index} className="star shining"></li> )
            index >= _rate && _stars.push( <li key={index} className="star"></li> )
        }
        return _stars;
    }

    return (
        <div className="rating">
            <ul className="rate-stars">{ratingStars(rate)}</ul>
        </div>
    );
}
