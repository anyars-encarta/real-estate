import React from 'react';
import { listData } from '../../lib/dummyData';
import Card from '../card/Card';
import './list.scss';

const List = () => {
    return (
        <div className='list'>
            {listData.map((listItem) => (
                <Card key={listItem.id} item={listItem} />
            ))}
        </div>
    )
}

export default List