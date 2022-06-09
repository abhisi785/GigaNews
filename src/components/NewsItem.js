import React from "react";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
          {/* style={{left: '90%', zIndex: '1'}} */}
          <span className="badge rounded-pill bg-danger" >
              {source} 
          </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/img/2022/03/30/1600x900/hydration_1639992405709_1648651625956.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              // target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
