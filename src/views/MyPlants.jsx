import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyPlantsList from "../components/MyPlantsList";
import "./MyPlants.css";
import FilterSelect from "../components/FilterSelect";
import SearchField from "../components/Searchfield";

export default function MyPlants() {

    const [plants, setPlants] = useState(() => {
        const savedPlants = localStorage.getItem("myPlants");
        return savedPlants ? JSON.parse(savedPlants) : [];
    });

    useEffect(() => {
        localStorage.setItem("myPlants", JSON.stringify(plants));
    }, [plants]);

    const [searchText, setSearchText] = useState("");
    const [levelFilter, setLevelFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    const filteredPlants = plants
        .filter(plant => plant.name.toLowerCase().includes(searchText.toLowerCase()) || 
            plant.species.toLowerCase().includes(searchText.toLowerCase()))
        .filter(plant => levelFilter ? plant.level === levelFilter : true)
        .filter(plant => locationFilter ? plant.location === locationFilter : true)
        .toSorted((a, b) => a.name.localeCompare(b.name, "en", {sensitivity: "base"}));
  

    return (

    <>
    <section className="myplants">
      
        {/* Top Row */}
        <div className="myplants-header">
            <h1>My Plants</h1>
            <Link to="/add-plant" className="add-plant-btn">+ Add a Plant</Link>
        </div>

        {/* Searchfield and Filters*/}
        <div className="myplants-filters">
            <SearchField searchText={searchText} setSearchText={setSearchText} />
            <FilterSelect
                label="Level"
                value={levelFilter}
                onChange={setLevelFilter}
                options={["Beginner", "Intermediate", "Expert"]}
            />
            <FilterSelect
                label="Location"
                value={locationFilter}
                onChange={setLocationFilter}
                options={["Indoor", "Outdoor"]}
            />
        </div>


        {/* Plant List */}
        <MyPlantsList className="list" plants={filteredPlants} setPlants={setPlants} />

    </section>
    </>
    );
}