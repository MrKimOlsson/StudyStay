import React from "react";
import '../utils/styles/filterUnits.scss'
// import { MdApartment } from 'react-icons/md';
import { BsHouseDoor, BsDoorOpen } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import { LuSettings2 } from 'react-icons/lu';

// import { BsDoorOpen } from 'react-icons/';
// FaRegBuilding
// BsFillHouseDoorFill
// MdApartment

interface FilterButtonsProps {
  onFilterButtonClick: (unitType: string) => void;
  onFilterModalButtonClick: () => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  onFilterButtonClick,
  onFilterModalButtonClick,
}) => {
  return (
    <div className="filterUnitsComponent">
      <button onClick={() => onFilterButtonClick('apartment')} className='filerButton'><FaRegBuilding className="filterIcons" />Apartment</button>
      <button onClick={() => onFilterButtonClick('house')} className='filerButton'><BsHouseDoor className="filterIcons"/>House</button>
      <button onClick={() => onFilterButtonClick('room')} className='filerButton'><BsDoorOpen className="filterIcons"/>Room</button>
      
      <button onClick={onFilterModalButtonClick} className='filerButton'><LuSettings2 className="filterIcons"/>Filter</button>
    </div>
  );
};

export default FilterButtons;