import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // const updateNews = async () => {
  //   props.setProgress(10);
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a5ead47555cd4a42b62262dfb23295f3&page=${page}&pageSize=${props.pagesize}`;

  //   //GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY

  //   setloading(true);
  //   let data = await fetch(url);

  //   if (data.status === 426) {
  //     // Check for Upgrade header in response
  //     const upgradeProtocol = data.headers.get("Upgrade");
  //     if (upgradeProtocol) {
  //       console.warn("Upgrade required to protocol:", upgradeProtocol);
  //       // Handle upgrade logic based on protocol (e.g., switch to WebSocket)
  //     } else {
  //       console.error("Upgrade required, but protocol not specified");
  //     }
  //   } else {
  //     // Process successful response
  //     console.log("Response data:", data);
  //   }

  //   props.setProgress(30);
  //   let parsedData = await data.json();
  //   props.setProgress(70);
  //   setarticles(parsedData.articles);
  //   settotalResults(parsedData.totalResults);
  //   setloading(false);
  //   props.setProgress(100);
  // };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a5ead47555cd4a42b62262dfb23295f3&page=${page}&pageSize=${props.pagesize}`;

    setloading(true);

    try {
      let response = await fetch(url);

      if (response.status === 426) {
        console.error(
          "Error 426: Upgrade required, but protocol not specified"
        );
        // You can display an error message or take further action here
      } else if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        // Handle other non-200 HTTP status codes
      } else {
        // Process successful response
        let parsedData = await response.json();
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        console.log("Response data:", parsedData);
      }

      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    document.title = ` News ${capitalized(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a5ead47555cd4a42b62262dfb23295f3&page=${page}&pageSize=${props.pagesize}`;

    setpage(page + 1);
    try {
      let data = await fetch(url);

      let parsedData = await data.json();
      setarticles(articles.concat(parsedData.articles));
      settotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  console.log("render");
  return (
    <>
      <h2
        className="text-center"
        style={{ margin: "25px 0px", marginTop: "85px" }}
      >
        Top News from {capitalized(props.category)}
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={totalResults ? articles.length < totalResults : false}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row my-6">
            {articles &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      discription={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  category: "General",
  pagesize: 9,
};

News.propsTypes = {
  category: PropTypes.string,
  pagesize: PropTypes.number,
};

export default News;
