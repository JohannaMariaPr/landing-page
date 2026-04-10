import PlantGuideItem from "../components/PlantItem";
import "./Home.css";
import heroImage from "../assets/pots.jpg";
import introImage from "../assets/seedling.jpg";
import SearchField from "../components/Searchfield";
import FilterSelect from "../components/FilterSelect";
import { useState } from "react";

const plants = [
    {
        id: 1,
        commonName: "Fiddle-Leaf Fig",
        scientificName: "Ficus lyrata",
        light: "Bright, indirect light (6+ hrs)",
        watering: "When top 2-3 inches of soil are dry",
        soil: "Well-draining, peat-based mix with perlite",
        level: "Expert",
        location: "Indoor"
    },
    {
        id: 2,
        commonName: "Snake Plant",
        scientificName: "Sansevieria trifasciata",
        light: "Low to bright indirect light",
        watering: "Every 2-3 weeks",
        soil: "Well-draining cactus or succulent mix",
        level: "Beginner",
        location: "Indoor"
    },
    {
        id: 3,
        commonName: "Spider Plant",
        scientificName: "Chlorophytum comosum",
        light: "Bright, indirect sunlight",
        watering: "Every 1-2 weeks",
        soil: "Well-draining potting mix",
        level: "Intermediate",
        location: "Indoor"
    },
    {
        id: 4,
        commonName: "Peace Lily",
        scientificName: "Spathiphyllum wallisii",
        light: "Low to medium indirect light",
        watering: "Keep soil moist, do not overwater",
        soil: "Well-draining potting soil",
        level: "Intermediate",
        location: "Indoor"
    },
    {
        id: 5,
        commonName: "Aloe Vera",
        scientificName: "Aloe barbadensis",
        light: "Bright indirect to direct sunlight",
        watering: "Every 3 weeks, let soil dry",
        soil: "Sandy, well-draining mix",
        level: "Beginner",
        location: "Indoor"
    },
    {
        id: 6,
        commonName: "Lavender",
        scientificName: "Lavandula angustifolia",
        light: "Full sun (6+ hrs)",
        watering: "Once a week, let soil dry",
        soil: "Well-draining soil, sandy preferred",
        level: "Intermediate",
        location: "Outdoor"
    },
    {
        id: 7,
        commonName: "Rose",
        scientificName: "Rosa spp.",
        light: "Full sun (6+ hrs)",
        watering: "Every 2-3 days",
        soil: "Loamy, well-draining soil",
        level: "Expert",
        location: "Outdoor"
    },
    {
        id: 8,
        commonName: "Basil",
        scientificName: "Ocimum basilicum",
        light: "6+ hrs of sunlight",
        watering: "Keep soil moist",
        soil: "Well-draining potting soil",
        level: "Beginner",
        location: "Indoor"
    },
    {
        id: 9,
        commonName: "Marigold",
        scientificName: "Tagetes spp.",
        light: "Full sun",
        watering: "Every 1-2 days in dry weather",
        soil: "Well-draining garden soil",
        level: "Beginner",
        location: "Outdoor"
    }
];




export default function Home() {


    const [searchText, setSearchText] = useState("");
    const [levelFilter, setLevelFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    const filteredPlants = plants
        .filter(plant =>
            plant.commonName.toLowerCase().includes(searchText.toLowerCase()) ||
            plant.scientificName.toLowerCase().includes(searchText.toLowerCase())
        )
        .filter(plant =>
            levelFilter ? plant.level === levelFilter : true
        )
        .filter(plant =>
            locationFilter ? plant.location === locationFilter : true
        );

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

            {/* Introduction Section */}
            <section className="intro">
                <div className="intro-container">
                    <img src={introImage} alt="This picture shows a seedling getting planted in a flower pot." className="intro-img" />
                    <div className="intro-text">
                        <h2>About Botanical Garden</h2>
                        <p>
                            Botanical Garden is your go-to community for indoor and outdoor gardening. 
                            Whether you're a beginner looking to start your first plant collection, 
                            or an experienced gardener seeking inspiration, we provide guides, tips, 
                            and a supportive community to help your plants thrive. 
                            Discover the joy of growing and caring for plants with us!
                        </p>
                    </div>
                </div>
            </section>
        
            {/* Plant Care Guides */}
            <section className="plant-guides">
                <h2>Plant Care Guide</h2>
                <p>Taking care of plants can be simple and rewarding.</p>
                <p>Most plants need the right amount of light, water, and well-draining soil to thrive.</p> 
                <p>Remember to check your plant’s specific requirements, water it consistently, and give it some love and attention.</p> 
                <p>Healthy plants not only brighten your space but also bring a sense of calm and satisfaction to your daily routine.</p>

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

                <div className="plant-grid">
                    {filteredPlants.map((plant, index) => (
                        <PlantGuideItem key={index} plant={plant} />
                    ))}
                </div>
            </section>
        </>
    )
}