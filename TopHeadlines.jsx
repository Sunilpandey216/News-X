import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import EverythingCard from './EverythingCard';
import Loader from "./Loader";

function TopHeadlines() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  let pageSize = 6;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const categoryParam = params.category ? `&category=${params.category}` : "";
    fetch(`https://news-aggregator-dusky.vercel.app/top-headlines?language=en${categoryParam}&page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((json) => {
        if (json.success) {
          setTotalResults(json.data.totalResults);
          setData(json.data.articles);
        } else {
          setError(json.message || 'An error occurred');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to fetch news. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, params.category]);

  return (
    <>
      {error && <div className="text-danger mb-3">{error}</div>}

      <div className="my-4 container">
        <div className="row justify-content-center gx-4 gy-4">
          {!isLoading ? (
            data.length > 0 ? (
              data.map((element, index) => (
                <div key={index} className="col-12 col-md-6 col-xl-4 d-flex">
                  <EverythingCard
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    publishedAt={element.publishedAt}
                    url={element.url}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              ))
            ) : (
              <p>No articles found for this category or criteria.</p>
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>

      {!isLoading && data.length > 0 && (
        <div className="d-flex justify-content-center align-items-center gap-3 my-4">
          <button
            disabled={page <= 1}
            className="btn btn-primary"
            onClick={handlePrev}
          >
            &larr; Prev
          </button>
          <p className="mb-0 fw-semibold text-secondary">
            {page} of {Math.ceil(totalResults / pageSize)}
          </p>
          <button
            disabled={page >= Math.ceil(totalResults / pageSize)}
            className="btn btn-primary"
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </>
  );
}

export default TopHeadlines;
