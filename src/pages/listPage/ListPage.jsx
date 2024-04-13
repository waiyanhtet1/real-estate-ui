import "./listPage.scss";
import { listData as data } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import ListCard from "../../components/listCard/ListCard";
import Map from "../../components/map/Map";

const ListPage = () => {
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
    </div>
  );
};

export default ListPage;
