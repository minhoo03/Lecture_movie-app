import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMovie } from './interfaces'

function Detail() {
  const { id } = useParams<{ id: string }>() // URL 파라미터에서 id를 string으로 받음
  const [loading, setLoading] = useState<boolean>(true)
  const [movie, setMovie] = useState<IMovie | null>(null) // Movie 인터페이스에 맞는 타입 또는 null로 초기화

  const getMovie = async () => {
    try {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      if (!response.ok) {
        throw new Error("Network response was not ok.")
      }

      const json = await response.json()
      setMovie(json.data.movie as IMovie) // IMovie 타입으로 형 변환하여 설정
      // setMovie(json.data.movie)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching movie:", error)
      setLoading(false)
    }
  }
  
  useEffect(() => {
    getMovie()
  }, [id]) // id가 변경될 때마다 API 호출

  return (
    <div className="Detail">
      {
        loading ? (
          <p>loading...</p>
        ) : movie ? ( // movie가 null이 아닌 경우에만 렌더링
          <div>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description_intro}</p>
          </div>
        ) : (
          <p>Movie not found</p>
        )
      }

    </div>
  );
}

export default Detail;
