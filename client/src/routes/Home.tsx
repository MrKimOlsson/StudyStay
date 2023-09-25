import { useEffect, useState } from "react";
import { getApartments } from "../api/getApartments";
import ResidentialGrid from "../components/ResidentialGrid";

const Home = () => {

  const [residentials, setResidentials] = useState<TResidentialUnit[]>([]);

  useEffect(() => {
    async function fetchApartments() {
      const newResidentials = await getApartments();
      setResidentials(newResidentials);
    }
    fetchApartments();
  }, []);

  console.log(residentials)

  return (
    <div className="container">
      {residentials.length > 0 ? (
            <ResidentialGrid residentials={residentials} />
          ) : (
            <h2>No products to show</h2>
          )}
    </div>
  )
}

export default Home