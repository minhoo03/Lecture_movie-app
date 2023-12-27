import { Link } from "react-router-dom"
import styled from 'styled-components'

const Card = styled.div`
    border-radius: 12px;
    margin: 0 16px 16px 0;

    img {
        transition: 0.4s;
        opacity: 0.7;
        border: 1px solid transparent;
    }

    &:hover img {
        opacity: 1;
        border: 1px solid #e2e2e2;
    }
`

const Movie = ({ id, title, imgSrc }) => {
    return (
        <Card>
            <Link to={`/movie/${id}`}><img src={imgSrc} alt={title} /></Link>
            
            {/* <h3>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3> */}
        </Card>
    )
}

export default Movie