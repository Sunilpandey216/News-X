import React from "react";

function Card(props) {
  return (
    <div className="card mb-4 p-3">
      {/* Main News Card Section */}
      <h5 className="card-title fw-bold">{props.title}</h5>
      
      {props.imgUrl && (
        <div className="text-center my-3">
          <img
            src={props.imgUrl}
            alt="img"
            className="img-fluid rounded"
            style={{ maxHeight: "250px", objectFit: "cover" }}
          />
        </div>
      )}

      <p className="card-text">
        {props.description?.substring(0, 200)}
      </p>

      <div className="mt-3">
        <p className="mb-1">
          <strong>Source:</strong>{" "}
          <a href={props.url} target="_blank" rel="noreferrer" className="text-decoration-underline">
            {props.source?.substring(0, 70)}
          </a>
        </p>
        <p className="mb-1"><strong>Author:</strong> {props.author || "Unknown"}</p>
        <p className="mb-1"><strong>Published At:</strong> {props.publishedAt}</p>
      </div>

      {/* Optional Extended Content Section */}
      {(props.cardTitle || props.cardDescription || props.authorImage) && (
        <div className="row mt-4 g-0 border rounded overflow-hidden">
          {props.imageUrlLeft && (
            <div className="col-md-4">
              <div
                className="h-100 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${props.imageUrlLeft})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100%',
                  minHeight: '200px'
                }}
                title={props.imageLeftTitle}
              ></div>
            </div>
          )}
          <div className="col-md-8 p-3 d-flex flex-column justify-content-between">
            <div>
              {props.memberText && (
                <p className="text-muted small d-flex align-items-center mb-2">
                  {props.memberIcon && (
                    <svg
                      className="me-2"
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {props.memberIcon}
                    </svg>
                  )}
                  {props.memberText}
                </p>
              )}
              <h6 className="fw-bold">{props.cardTitle}</h6>
              <p className="text-muted">{props.cardDescription}</p>
            </div>
            <div className="d-flex align-items-center mt-3">
              {props.authorImage && (
                <img
                  src={props.authorImage}
                  className="rounded-circle me-3"
                  alt="Author"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
              )}
              <div className="text-sm">
                <p className="mb-0 fw-semibold">{props.authorName}</p>
                <p className="text-muted small mb-0">{props.publishedDate}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
