import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1 className="filter-title">
        Search Reslut for <b>London</b>
      </h1>

      <div className="top">
        <div className="item">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder="City Location" />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="Condo">Condo</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" placeholder="Min Price" />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" placeholder="Max Price" />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="number" placeholder="Bedroom" />
        </div>
        <div className="item">
          <button>
            <img src="/search.png" alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
