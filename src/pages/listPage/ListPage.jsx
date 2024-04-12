import "./listPage.scss";
import { listData as data } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import ListCard from "../../components/listCard/ListCard";

const ListPage = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Filter />
        {data.map((list) => (
          <ListCard key={list.id} />
        ))}
      </div>
      <div className="mapContainer">map</div>
    </div>
  );
};

export default ListPage;
