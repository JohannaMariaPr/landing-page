import "./Home.css";
import plants from "../data/plants.json";
import heroImage from "../assets/pots.jpg";
import { useState } from "react";
import PlantItem from "../components/PlantItem";

export default function Home() {

    return (
        <>

            {/* Hero Section */}
            <section className="hero">
                <img src={heroImage} alt="Thsi picture shows plants in a garden." className="hero-img" />
                <div className="hero-text">
                    <h1>Welcome to Botanical Garden</h1>
                    <p>Your friendly community for plant lovers and beginners.</p>
                    <p>Explore care guides, tips, and inspiration for indoor and outdoor plants.</p>
                    <p>Connect with fellow gardeners and grow your plant knowledge every day.</p>
                </div>
            </section>

        
            {/* Featured Items */}
            <section className="featured-items">
                <h2>Featured Items</h2>

                <div className="plant-grid">
                    {plants.slice(0,3).map((plant) => (
                        <PlantItem key={plant.id} plant={plant} />
                    ))}
                </div>
            </section>
        </>
    )
}