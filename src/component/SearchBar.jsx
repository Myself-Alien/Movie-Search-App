import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-info mybtn" type="button" onClick={onSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
