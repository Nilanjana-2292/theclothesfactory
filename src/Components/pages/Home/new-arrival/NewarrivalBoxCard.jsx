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
            {/* <div className="heart">
              <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.3124 27.0676L14.9374 26.9014C9.04993 24.2293 2.78743 18.9876 2.81243 12.2628C2.82493 8.2995 4.97493 5.1161 8.41243 3.99104C11.0499 3.12167 13.4624 3.77369 15.3124 5.83204C17.1624 3.77369 19.5749 3.12167 22.2124 3.99104C25.6499 5.12888 27.7999 8.2995 27.8124 12.2756C27.8499 18.9876 21.5749 24.2293 15.6874 26.9014L15.3124 27.0676ZM10.6249 5.52521C10.0999 5.52521 9.56243 5.6147 8.98743 5.80647C5.82493 6.84204 4.68743 9.83368 4.68743 12.2756C4.66243 17.9265 10.3124 22.5929 15.3124 24.9581C20.3124 22.5929 25.9624 17.9265 25.9374 12.2756C25.9374 9.83368 24.7874 6.85482 21.6374 5.80647C19.3999 5.06496 17.5374 5.7809 16.0874 7.90318L15.3124 9.02824L14.5374 7.90318C13.4624 6.31786 12.1499 5.51242 10.6249 5.51242V5.52521Z"
                  fill="#810000"
                />
              </svg>
            </div> */}
            <div className="cart-buy-btn">
              {/* <div className="buy-btn">
                <span className="btn">BUY NOW</span>
              </div> */}
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