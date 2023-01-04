import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
// apikey=0323129e12464bdc98654cdd1217d38d

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalresults] = useState(0)

  useEffect(() => {
    document.title=`${capfirst(props.category)}-NewsMonkey`
    updateNews()
  }, [])

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0323129e12464bdc98654cdd1217d38d&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    props.setProgress(60)
    setArticles(parsedData.articles)
    setTotalresults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }
  
  const fetchMore = async () => {
    await setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0323129e12464bdc98654cdd1217d38d&page=${page+1}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalresults(parsedData.totalResults)
    setLoading(false)
  }

  const capfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


  return (
    <>
      <h2 className='text-center' style={{marginTop:'5rem'}}>NewsMonkey-{capfirst(props.category)} Headlines</h2>
      {loading&&<Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}>
        <div className='container'>
          <div className="row mx-4 my-4" >
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/1312418309/photo/visual-contents-concept-social-networking-service-streaming-video-communication-network-3d.jpg?s=612x612&w=is&k=20&c=Fwxb-4oWqM9zejFjwuIJf_rOu6pzxCFXTxFzw21fkI8="} url={element.url} author={element.author ? element.author : 'unknown'} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
  totalResults: 0
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;