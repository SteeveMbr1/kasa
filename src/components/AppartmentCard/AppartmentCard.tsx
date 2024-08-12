import "./AppartmentCard.scss";

type AppartmentCardPorps = {
    cover: string;
    title: string;
    link: string;
    clickEvent?: any;
};

export default function AppartmentCard({ cover, title, link, clickEvent }: AppartmentCardPorps) {
    return (
        <div className="appartment-card">
            <img className="card-img" src={cover} />
            <a className="card-layer" href={link} onClick={clickEvent}></a>
            <p className="card-title">{title}</p>
        </div>
    );
}
