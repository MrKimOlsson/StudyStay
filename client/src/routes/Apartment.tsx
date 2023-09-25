import { useEffect, useState } from "react";
import { getApartment } from "../api/getApartment";
import { useParams } from "react-router-dom";

const Apartment = () => {

  const { id } = useParams();

  const [apartment, setApartment] = useState<TApartment>();

  useEffect(() => {
    async function fetchApartment() {
      const newApartment = await getApartment(id || '');
      setApartment(newApartment);
    }
    fetchApartment();
  }, [id]);

  console.log(apartment)
  return (
    <div className="container">
      {apartment?.imageURL.length > 0 ? (
        <img className='residentialGridImage' src={apartment?.imageURL[0]} alt="residentialImage" />
      ) : (
        <p>No image available</p>
      )}
      <h4 className='residentialTitle'>{apartment?.title}</h4>
      <div className='row'>
        <p><strong>Price: </strong>{apartment?.price}$</p>
        <p><strong>Description: </strong>{apartment?.descripiton}</p>
        <p><strong>Period: </strong>{apartment?.period}</p>
        <p><strong>Avalible: </strong>{apartment?.avalible}</p>
    </div>
    </div>
  )
}

export default Apartment