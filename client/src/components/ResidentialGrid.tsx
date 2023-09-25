import React from 'react';
import ResidentialUnit from './ResidentialUnit'; // Make sure the import path is correct
// import { ProductType } from '../../utils/types/product'; // Adjust the import path
import '../utils/styles/grid.scss'

interface GridProps {
  residentials: TResidentialUnit[];
}

const ResidentialGrid: React.FC<GridProps> = ({ residentials }: GridProps) => { 
  return (
      <div className='flex-wrap'> 
        {residentials.length > 0 ? (
          residentials.map(unit => <ResidentialUnit key={unit._id} unit={unit} />)
        ) : (
          <h2>No products to show</h2>
        )}
      </div>
  );
};

export default ResidentialGrid;