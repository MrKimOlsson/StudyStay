import { useEffect, useState } from "react";
// import { getApartment } from "../api/getApartment";
import { getUnit } from "../api/getUnit";
import { useParams } from "react-router-dom";

const Residential = () => {

  const { unitType, id } = useParams();

  const [unit, setUnit] = useState<TResidentialUnit>();

  useEffect(() => {
    async function fetchUnit() {
      console.log('unit type: '+ unitType)
      const newUnit = await getUnit(id || '', unitType || '');
      setUnit(newUnit);
    }
    fetchUnit();
  }, [id]);

  console.log(unit)
  return (
    <div className="container">
      {unit?.imageURL.length > 0 ? (
        <img className='residentialGridImage' src={unit?.imageURL[0]} alt="residentialImage" />
      ) : (
        <p>No image available</p>
      )}
      <h4 className='residentialTitle'>{unit?.title}</h4>
      <div className='row'>
        <p><strong>Price: </strong>{unit?.price}$</p>
        <p><strong>Description: </strong>{unit?.descripiton}</p>
        <p><strong>Period: </strong>{unit?.period}</p>
        <p><strong>Avalible: </strong>{unit?.avalible}</p>
    </div>
    </div>
  )
}

export default Residential