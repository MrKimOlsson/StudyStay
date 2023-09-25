import React from "react";
import "../utils/styles/filterModal.scss";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`filter-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-wrapper">
        <div className="modal-header">
             <h3>Filter</h3>
        </div>
        <div className="modal-content">
        <h4>Residential type</h4>
        <p>Search for rooms, apartments, houses or other types of residential units</p>

        <div className="filterModalButtons">
            <button className='modalButtonStart'>Apartments</button>
            <button>Houses</button>
            <button className='modalButtonEnd'>Rooms</button>
        </div>
        
        {/* Add your filtering options and form elements here */}
        <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;