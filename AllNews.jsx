import { React, useState, useEffect } from 'react';
import EverythingCard from './EverythingCard';
import Loader from './Loader';

function AllNews() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageSize = 12;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`https://news-aggregator-dusky.vercel.app/all-news?page=${page}&pageSize=${pageSize}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(myJson => {
        if (myJson.success) {
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        } else {
          setError(myJson.message || 'An error occurred');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to fetch news. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  const handlePrev = () => setPage(page - 1);
  const handleNext = () => setPage(page + 1);

  return (
    <div className="container my-5">
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {!isLoading ? (
          data.map((element, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
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
          <Loader />
        )}
      </div>

      {!isLoading && data.length > 0 && (
        <div className="d-flex justify-content-center align-items-center my-4">
          <button
            className="btn btn-outline-primary me-3"
            onClick={handlePrev}
            disabled={page <= 1}
          >
            &larr; Prev
          </button>
          <span className="fw-semibold opacity-75">
            {page} of {Math.ceil(totalResults / pageSize)}
          </span>
          <button
            className="btn btn-outline-primary ms-3"
            onClick={handleNext}
            disabled={page >= Math.ceil(totalResults / pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
}

export default AllNews;
