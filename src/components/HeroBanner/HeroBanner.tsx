import './HeroBanner.scss'

type HeroBannerProps = { 
    image: string,
    opacity?: number,
    children?: string
};

export default function HeroBanner({ image, opacity = .5, children = "" }: HeroBannerProps) {
    return <div className="hero">
        <img className='hero-img' src={image}/>
        <div className="hero-layer" style={{
            backgroundColor: `rgba(0,0,0, ${opacity})`
        }}></div>
        <p className="hero-text">{children}</p>
    </div>;
}
