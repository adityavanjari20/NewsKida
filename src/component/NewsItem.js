import React from "react";

function NewsItem(props) {
  return (
    <>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={props.urlToImage}
            className="card-img-top"
            alt={props.urlToImage}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
