import React  from 'react'

const Newsitem=(props)=> {
    let { title, description, imageUrl, url, author, date, source } =props
    return (
      <div className='my-3'>
        <div className="card" >
          <div className='d-flex position-absolute justify-content-end end-0 m-1' >
            <span className=" badge rounded-pill bg-danger">{source} </span>
          </div>
          <img src={imageUrl} style={{ height: '180px' }} className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: '0.5rem 1rem' }}>
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text" style={{ marginBottom: 0 }}>{description}...</p>
            <p className="card-text" style={{ marginBottom: 0 }}><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={url} rel='noreferrer' target='_blank' style={{ padding: 0 }} className="btn btn-link">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default Newsitem