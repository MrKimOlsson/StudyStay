import { useEffect, useState } from "react";
import { getUnits } from "../api/getUnits";
import ResidentialGrid from "../components/ResidentialGrid";
import FilterModal from "../components/FilterModal";
import FilterButtons from "../components/FilterButtons";

const Home = () => {
  const [residentials, setResidentials] = useState<TResidentialUnit[]>([]);
  const [unitType, setUnitType] = useState('apartment');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Fetch residential units based on unit type
  useEffect(() => {
    async function fetchUnits() {
      const newResidentials = await getUnits(unitType);
      setResidentials(newResidentials);
    }
    fetchUnits();
  }, [unitType]);

  // Handle filter modal
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleFilterButtonClick = (newUnitType: string) => {
    setUnitType(newUnitType);
  };

  return (
    <div className="container">
      {/* Unit type filter buttons */}
      <FilterButtons
        onFilterButtonClick={handleFilterButtonClick}
        onFilterModalButtonClick={toggleFilterModal}
      />

      {/* Filtering modal */}
      <FilterModal isOpen={isFilterModalOpen} onClose={toggleFilterModal} />

      {/* Send the residentials that where fetched based on the unit type to the residential grid component*/}
      {residentials.length > 0 ? (
        <ResidentialGrid residentials={residentials} />
      ) : (
        <h2>No products to show</h2>
      )}
    </div>
  );
}

export default Home;