import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyPlantsList from "../components/MyPlantsList";
import "./Review.css";

export default function Review() {
    
    const [reviews, setReviews] = useState(() => {
        const savedReviews = localStorage.getItem("reviews");
        return savedReviews ? JSON.parse(savedReviews) : [];
    });

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        lastVisited: "",
        notes: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newReview = { id: crypto.randomUUID(), ...formData, dateAdded: new Date().toISOString().split("T")[0]};

        const savedReviews = localStorage.getItem("reviews");
        const reviews = savedReviews ? JSON.parse(savedReviews) : [];

        localStorage.setItem("reviews", JSON.stringify([...reviews, newReview]));

    }

    

    return (
        <section className="add-review">
            <h1>Add a Review</h1>

            <form onSubmit={handleSubmit} className="add-review-form">
                <label>
                    Your Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

            
                <label>
                    Last Visited
                    <input
                        type="date"
                        name="lastVisited"
                        value={formData.lastVisited}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Notes
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="4"
                    />
                </label>

                <button type="submit" className="submit-btn">Add Review</button>

            </form>

            
        <MyPlantsList className="list" reviews={reviews} setReviews={setReviews} />

        </section>

        
    );
}