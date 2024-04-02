import React from 'react';
import './list.scss';
import { listData } from '../../lib/dummyData';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

const List = () => {
  const data = listData;

  return (
    <div className='listPage'>
      <div className="listContainer">
        <Filter />
        <div className="wrapper">
          {
            data.map((dataItem) => (
              <Card key={dataItem.id} item={dataItem} />
            ))
          }
        </div>
      </div>

      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  )
}

export default List;