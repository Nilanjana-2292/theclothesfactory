import React from 'react';
import CollectionBoxCard from './CollectionBoxCard';
import {productData} from '../../../../Data';

const CollectionList = () => {
  return (
    <div className="row">
      {productData.slice(0,3).map((product, index) => (
        <CollectionBoxCard key={index} {...product} />
      ))}
    </div>
  );
};

export default CollectionList;
