import PlantItem from "../components/PlantItem";
import "./Home.css";
import plants from "../data/plants.json";
import SearchField from "../components/Searchfield";
import { useState } from "react";

export default function Exhibitions() {
  const [searchText, setSearchText] = useState("");

  const filteredPlants = plants
    .filter(
      (plant) =>
        plant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    
  return (
    <>
      {/* All Exhibits */}
      <section className="featured-items">
        <h2>All Exhibits</h2>

        {/* Searchfield and Filters*/}
        <div className="myplants-filters">
          <SearchField searchText={searchText} setSearchText={setSearchText} />
        </div>

        <div className="plant-grid">
          {filteredPlants.map((plant) => (
            <PlantItem key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
    </>
  );
}
