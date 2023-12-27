import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMovie } from './interfaces'
import styled from 'styled-components'
import {Container} from './styled'
import {StyledGenres}from './stories/GenresContainer'


const Background = styled.div<{bgImg?: string}>`
  width: 100%;
  min-height: 100%;

  ${({ bgImg }) => 

    bgImg &&
    `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(${bgImg});
      background-repeat: no-repeat;
      background-size: cover;

      display: flex;
      justify-content: center;
      align-items: center;
    `
  }
`

const DetailContainer = styled.div`
  width: 100%;
  max-width: 720px;
  height: 100%;
  max-height: 345px;

  display: flex;
  

  background-color: rgba(225, 225, 225, 0.5);
  padding: 20px;
`

const DetailContent = styled.div`
  height: 1010%;
  margin-left: 40px;

  display: flex;
  flex-direction: column;

  h3, p {
    margin: 0;
    padding: 0;
    text-aling:center;
  }

  h3 {
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 20px;
  }
`

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
    <Container>
      {
        loading ? (
          <p>loading...</p>
        ) : movie ? ( // movie가 null이 아닌 경우에만 렌더링
          <Background bgImg={movie.background_image}>

            {/* StyledGenres */}
            <DetailContainer>
            <img src={movie.medium_cover_image} alt={movie.title} />

            <DetailContent>
              <h3>{movie.title}</h3>
              <p>{movie.description_intro ? movie.description_intro : 'lorem lorem ifsum..lorem ifsum..lorem ifsum.. ifsum..'}</p>

              <StyledGenres>
                {
                  movie.genres && movie.genres.map(item => <span>{item}</span>)
                }
              </StyledGenres>
            </DetailContent>

            </DetailContainer>
            
            
          </Background>
        ) : (
          <p>Movie not found</p>
        )
      }

    </Container>
  );
}

export default Detail;
