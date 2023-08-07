import React from "react";
import NewsItem from "./NewsItem";
import { Data } from "../sampleData";

function News() {
  const news = Data.articles;
  return (
    <>
      <h1 className="text-center">NewsKida - Top Headline</h1>
      <div className="container">
        <div className="row">
          {news.map((data) => {
            return (
              <div className="col">
                <NewsItem
                  className=""
                  title={data.title}
                  description={data.description}
                  url={data.url}
                  urlToImage={data.urlToImage}
                ></NewsItem>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
