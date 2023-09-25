import React from 'react';
import ResidentialUnit from './ResidentialUnit'; // Make sure the import path is correct
// import { ProductType } from '../../utils/types/product'; // Adjust the import path
import '../utils/styles/grid.scss'

interface GridProps {
  apartments: TApartment[];
}

const ResidentialGrid: React.FC<GridProps> = ({ apartments }: GridProps) => {
  return (
      <div className='flex-wrap'>
        {apartments.length > 0 ? (
          apartments.map(apartment => <ResidentialUnit key={apartment._id} apartment={apartment} />)
        ) : (
          <h2>No products to show</h2>
        )}
      </div>
  );
};

export default ResidentialGrid;