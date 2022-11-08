import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const News = () => {

  const [articles, setArticles] = useState([])

  const newsApi = async (props) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6a9a50d7afmsh4dd6f42d1fed78cp184326jsn64d0ef714c15',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    };

    let data = await fetch(`https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=news&lang=en&country=in&media=True`, options)
    let parsedData = await data.json();
    console.log(parsedData)

    setArticles(parsedData.articles)
  }

 
  useEffect(() => {
    newsApi()

  }, [])


  return (
    
    <div className='container my-4 '>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map((element) => {
          return (

            <NewsItem id={element._id}
              title={element.title}
              summary={element.summary}
              link={element.link} media={element.media}
              date={element.published_date}
              source={element.clean_url} />
          )
        })}

      </div>
    </div>
  )
}

export default News
