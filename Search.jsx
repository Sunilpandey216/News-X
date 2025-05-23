import React from 'react';

function Search() {
  return (
    <form className="text-center my-4 px-3">
      <div className="input-group mb-3 mx-auto" style={{ maxWidth: '600px' }}>
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="Search News"
        />
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
