

import React from 'react';
import NewarrivalBoxCard from '../new-arrival/NewarrivalBoxCard';
import { productData } from '../../../../Data';

const NewArrivalList = () => {
  return (
    <div className="row">
      {[...productData].reverse().slice(0,3).map((product, index) => (
        <NewarrivalBoxCard key={index} {...product} />
      ))}
    </div>
  );
};

export default NewArrivalList;
