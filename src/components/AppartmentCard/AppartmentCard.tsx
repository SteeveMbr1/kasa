import "./AppartmentCard.scss";

export default function AppartmentCard({cover, title} : {cover: string, title: string}) {
  return (
    <div className="appartment-card">
        <img className="card-img" src={cover} />
        <div className="card-layer"></div>
        <p className="card-title">{title}</p>
    </div>
  )
}
