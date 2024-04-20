import { useSearchParams } from "react-router-dom";
import "./filter.scss";
import { useState } from "react";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.value);
  };

  const onSearchHandler = () => {
    setSearchParams(query);
  };

  return (
    <div className="filter">
      <h1 className="filter-title">
        Search Reslut for <b>{searchParams.get("city")}</b>
      </h1>

      <div className="top">
        <div className="item">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="Condo">Condo</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            placeholder="Min Price"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            placeholder="Max Price"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            placeholder="Bedroom"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <div className="item">
          <button onClick={onSearchHandler}>
            <img src="/search.png" alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
