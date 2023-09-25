import React from 'react';
import { Link } from 'react-router-dom';
// import { ProductType } from '../../utils/types/product';
// import AddToCartFunctions from './AddToCartFunction'; // Correct the import if necessary

interface Props {
  apartment: TApartment;
}

const ResidentialUnit: React.FC<Props> = ({ apartment }) => {
  return (
    <Link className='residentialCard' to={`/apartment/${apartment._id}`}>
      {apartment.imageURL.length > 0 ? (
        <img className='residentialGridImage' src={apartment.imageURL[0]} alt="residentialImage" />
      ) : (
        <p>No image available</p>
      )}
      <h4 className='residentialTitle'>{apartment.title}</h4>
      <div className='row'>
        <p><strong>Price: </strong>{apartment.price}$</p>
        <p><strong>Description: </strong>{apartment.descripiton}</p>
        <p><strong>Period: </strong>{apartment.period}</p>
        <p><strong>Avalible: </strong>{apartment.avalible}</p>
        {/* <AddToCartFunctions product={product} /> */}
      </div>
    </Link>
  );
};

export default ResidentialUnit;