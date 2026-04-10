import { Link } from "react-router-dom";
import "./MyPlantsItem.css";

export default function MyPlantsItem({ review, deleteHandler }) {

  return (
    <div className="plant-card">
      <h3>{review.name}</h3>
      <p><strong>Last Visited:</strong> {review.lastVisited}</p>
      <p><strong>Notes:</strong></p>
      <p>{review.notes}</p>
      <div className="card-buttons">
        <button onClick={() => deleteHandler(review.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}