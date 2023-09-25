import { useEffect, useState } from "react";
import { getApartments } from "../api/getApartments";
import ResidentialGrid from "../components/ResidentialGrid";

const Home = () => {

  const [apartments, setApartments] = useState<TApartment[]>([]);

  useEffect(() => {
    async function fetchApartments() {
      const newApartments = await getApartments();
      setApartments(newApartments);
    }
    fetchApartments();
  }, []);

  console.log(apartments)

  return (
    <div className="container">
      {apartments.length > 0 ? (
            <ResidentialGrid apartments={apartments} />
          ) : (
            <h2>No products to show</h2>
          )}
    </div>
  )
}

export default Home