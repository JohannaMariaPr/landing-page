import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {

    return (
        <header className="header">
            <div className="logo">
                <h2>Botanical Garden Aarhus</h2>
            </div>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/exhibitions" className="nav-link">Exhibitions</Link>
                <Link to="/review" className="nav-link">Reviews</Link>
            </nav>
        </header>
    );
}