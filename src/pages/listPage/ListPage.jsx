import { Suspense, useState } from "react";
import "./listPage.scss";
// import { listData as data } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import ListCard from "../../components/listCard/ListCard";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";

const ListPage = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const data = useLoaderData();

  return (
    <div className="list">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((res) => (
                  <ListCard key={res.id} item={res} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
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
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) => <Map items={postResponse.data} />}
              </Await>
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPage;
