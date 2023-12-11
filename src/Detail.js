import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail() {
  const { id } = useParams() // /movie/101 => id = 101
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([])

  const getMovie = async () => {

    const json = await ( // API 조회
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json()

    setMovie(json.data.movie)
    setLoading(false) // API 조회 로직이 끝난 경우 loading 종료
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className="Detail">

    {
      loading ? ( // 영화 API fetch가 끝나기 전까진 로딩 화면 출력
        <p>loading...</p>
      ) : 
      <div>
        {
            <>
                <img src={movie.medium_cover_image} />
                <h3>{movie.title}</h3>
            </>
        }
        {/* {movies.map(movie => ( // 이후 배열 렌더링을 통해 화면 페인팅
          <Movie id={movie.id} title={movie.title} imgSrc={movie.medium_cover_image} />
          // <div>{movie.title}</div>
        ))} */}
      </div>
    }
   
    </div>
  );
}

export default Detail;
