import "./heroStyles.css";

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero__title">This is a Title</h1>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
            <p className="hero__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatem, quidem, voluptatum aperiam, voluptate officiis v
            </p>

            <div
                style={{ width: 1000, height: 700, border: "1px solid black" }}
            ></div>
        </div>
    );
}
