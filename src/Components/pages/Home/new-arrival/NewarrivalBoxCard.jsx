import React from 'react';
import './NewarrivalOne.css';
import './NewarrivalList';
import { productData } from '../../../../Data';
import { Link } from 'react-router-dom';

const NewarrivalBoxCard = ({ id, maninimage, name, offerprice, originalprice }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <Link to={`/product-detail/${id}`} className="collection-link">
        <div className="collectionInner">
          <div className="product">
            <img src={maninimage} alt={name} className="img-fluid" />
          </div>
          <div className="product-content">
            <h3>{name}</h3>
            <div className="product-price">
              <div className="offer-price">From {offerprice}</div>
              <div className="original-price">{originalprice}</div>
            </div>
          </div>
          <div className="product-buy">
           
            <div className="cart-buy-btn">
              
              <div className="cart-btn">
                <span className="btn">VIEW DETAILS</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewarrivalBoxCard;