import "./PlantItem.css";
import { Link } from "react-router-dom";  

export default function PlantItem({ plant }) {

  return (
   <Link to={`/update-plant/${plant.id}`} className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p><em>{plant.climate}</em></p>
      <p>{plant.introduction}</p>
    </Link>
  );
}