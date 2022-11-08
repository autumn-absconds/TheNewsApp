import React from 'react'

const NewsItem = (props) => {
  const ii = 'https://static.tildacdn.com/tild6335-3631-4230-a332-626539353336/news.jpg'
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' };
  var date = new Date(props.date).toLocaleString("en-US", options);


  return (
    <>
      <div className="col " key={props.id}>
        <div className="card h-100">


          <span class="position-absolute top-0 start-50  text-center translate-middle badge rounded-pill bg-danger">
            {props.source}
          </span>

          <img src={props.media ? props.media : ii} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.summary}</p>
            <div className='text-center'>
            <a className="btn btn-warning " href={props.link} role="button">Read More</a>
            </div>
        
           
          </div>
          <div className="card-footer">
              <small className="text-muted">Published at {date}</small>
            </div>
        </div>
      </div>
    </>
  )
}

export default NewsItem
