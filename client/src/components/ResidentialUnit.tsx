import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  unit: TResidentialUnit;
}

const ResidentialUnit: React.FC<Props> = ({ unit }) => {
  return (
    <Link className='residentialCard' to={`/residential/${unit.unitType}/${unit._id}`}>
      {unit.imageURL.length > 0 ? (
        <img className='residentialGridImage' src={unit.imageURL[0]} alt="residentialImage" />
      ) : (
        <p>No image available</p>
      )}
      <h4 className='residentialTitle'>{unit.title}</h4>
      <div className='row'>
        <p><strong>Price: </strong>{unit.price}$</p>
        <p><strong>Description: </strong>{unit.descripiton}</p>
        <p><strong>Period: </strong>{unit.period}</p>
        <p><strong>Avalible: </strong>{unit.avalible}</p>
      </div>
    </Link>
  );
};

export default ResidentialUnit;