import { Link } from "react-router-dom"

const Movie = ({ id, title, imgSrc }) => {
    return (
        <div>
            <img src={imgSrc} alt={title} />
            <h3>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
        </div>
    )
}

export default Movie