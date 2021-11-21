import { FC, useEffect, useState, useCallback, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { TmdbData } from 'src/interfaces';
import Slider from 'src/component/Slider';
import SlideButton from 'src/component/SlideButton';

const MovieList:FC = () => {


  const slideContainerRef = useRef<HTMLDivElement>(null);
  const slideWrap = useRef<HTMLDivElement>(null);
  const [slideContainerWidth, setSlideContainerWidth] = useState(0);
  let [slideIndex, setSlideIndex] = useState(0); // 슬라이드 인덱스
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [movieData, setMovieData] = useState<TmdbData>();
  const [totalCount, setTotalCount] = useState(0);
  const [totalSlideCount, setTotalSlideCount] = useState(0);
  const [distance, setDistance] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  
  const elementWidth = 220
  
  const handleNext = useCallback(() => {
    setSlideIndex(slideIndex++)
    if (slideWrap.current) {
      const distance = elementWidth * totalInViewport * slideIndex
      setDistance(distance)
      slideWrap.current.style.transform = `translate(-${distance}px, 0)`
    }
  }, [slideIndex, distance])

  const getMovieData = useCallback(async () => {
    dotenv.config()
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko`
    const result = await axios.get(url)
    const data = result.data
    setTotalCount(data.results.length)
    setMovieData(data)
    console.log('data : ', data)
    initSlide()
  }, [movieData, totalCount])

  const initSlide = useCallback(() => {
    console.log('initSlide')
    if (slideContainerRef.current && slideContainerRef.current.clientWidth) {
      const slideWidth = slideContainerRef.current.clientWidth
      setSlideContainerWidth(slideWidth)
      setTotalInViewport(Math.floor(slideWidth / elementWidth))
      const totalSlideCnt = Math.ceil(totalCount / totalInViewport)
      console.log('totalSlideCnt : ', totalSlideCnt)
      
      setTotalSlideCount(totalSlideCnt)
      const next = slideIndex < totalSlideCount ? true : false
      setHasNext(next)
      setHasPrev(slideIndex > totalSlideCount ? true : false)
      console.log('뭐임 ? ', next)
      debugger
      console.log('next : ', hasNext)
    }
  }, [slideContainerWidth, totalInViewport, totalSlideCount, hasNext, hasPrev, totalCount, movieData])

  // useLayoutEffect(() => {
  //   if (slideContainerRef.current) {
  //     console.log('저기요')
  //     const slideWidth = slideContainerRef.current.clientWidth
  //     setSlideContainerWidth(slideWidth)
  //     setTotalInViewport(Math.floor(slideWidth / elementWidth))
  //     const totalSlideCnt = Math.ceil(totalCount / totalInViewport)
  //     setTotalSlideCount(totalSlideCnt)
  //     setHasNext(slideIndex < totalSlideCount ? true : false)
  //     setHasPrev(slideIndex > totalSlideCount ? true : false)
  //     console.log('next : ', hasNext)
  //   }
  // }, [slideContainerRef.current])
  
  useEffect(() => {
    getMovieData()
  }, [])
  return (
    <div className="movie-list__container">
      <div className="movie-list__title">
        현재 트렌드 영화
      </div>
      <div className="slider__container" ref={slideContainerRef}>
        <div className="slider__item-wrap" ref={slideWrap}>
          {
            movieData && movieData.results.map((item) => {
              return (
                <Slider item={item} key={item.id} />
              )
            })
          }
        </div>
        {
          hasPrev && <SlideButton type={"prev"} handleNext={handleNext} slideIndex={slideIndex} totalSlideCount={totalSlideCount}  />
        }
        {
          hasNext && <SlideButton type={"next"} handleNext={handleNext} slideIndex={slideIndex} totalSlideCount={totalSlideCount}  />
        }
        
      </div>
    </div>
  );
};

export default MovieList;