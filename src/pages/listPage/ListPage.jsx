import { useState } from "react";
import "./listPage.scss";
import { listData as data } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import ListCard from "../../components/listCard/ListCard";
import Map from "../../components/map/Map";

const ListPage = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <div className="list">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((list) => (
            <ListCard key={list.id} item={list} />
          ))}
        </div>
      </div>

      <div className="mapContainer">
        <Map items={data} />
      </div>

      <button className="map-opener" onClick={() => setIsMapOpen(true)}>
        Open Map
      </button>

      {isMapOpen && (
        <div className="mapWrapper">
          <div className="sm-mapContainer">
            <div className="header">
              <span>Map</span>
              <span className="close" onClick={() => setIsMapOpen(false)}>
                X
              </span>
            </div>
            <Map items={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPage;
