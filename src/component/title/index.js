import "./index.css";

export default function Title({
    title ,
    rating,
    review,
    city,
    country,
    superhost,
}) {
    return (
        <div className="title">
            <h1 className="title_text">{title}</h1>

            <div className="title_sub-block">
                <span className="title_sub-value">{rating} rating</span>

                <span className="title_sub-value">{review} reviews</span>

                <span className="title_sub-value">
                    {city}, {country}
                </span>

                {superhost && <span className="title_sub-value"> Superhost</span>}
            </div>
        </div>
    );
}