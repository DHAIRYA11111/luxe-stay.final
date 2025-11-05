import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hotels.css"; // Corrected path

export function Hotels({ onBookNow }) { // CRITICAL FIX
  const [price, setPrice] = useState(15000);
  const navigate = useNavigate();

  const hotels = [
    // ... (rest of the hotels data)
    {
      id: 1,
      name: "Grand Taj Palace",
      city: "Mumbai, India",
      price: 3500,
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
      amenities: ["WiFi", "Parking", "Gym", "Restaurant"],
    },
    // ... (truncated for brevity)
  ];

  const filteredHotels = hotels.filter((hotel) => hotel.price <= Number(price));

  const handleBook = (hotel) => {
    onBookNow(hotel);
    navigate("/bookings");
  };

  return (
    // ... (JSX render code is unchanged)
    <div className="hotels-page">
      <aside className="filters">
        <p className="city-header">All Cities</p>
        
        <h4 className="filter-group-title">Price Range: ₹0 - ₹{price}</h4>
        <input
          type="range"
          min="1000"
          max="20000"
          step="500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="price-slider"
        />

        <h4 className="filter-group-title">Amenities</h4>
        <div className="amenities">
          <label><input type="radio" name="amenity" /> WiFi</label>
          <label><input type="radio" name="amenity" /> Parking</label>
          <label><input type="radio" name="amenity" /> Gym</label>
          <label><input type="radio" name="amenity" /> Restaurant</label>
        </div>

        <h4 className="filter-group-title">Sort By</h4>
        <div className="sort-by-container">
          <select className="sort-dropdown">
            <option value="highest-rated">Highest Rated</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
          </select>
          <button className="sort-display">Highest Rated</button>
        </div>
        
        <button className="reset-btn">Reset Filters</button>
      </aside>

      <main className="hotels-list">
        <h2>Hotels</h2>
        <div className="hotel-grid">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={hotel.img} alt={hotel.name} />
              <div className="hotel-info">
                <div className="hotel-details">
                  <h3>{hotel.name}</h3>
                  <p className="city-name">{hotel.city}</p>
                </div>
                
                <div className="amenity-tags">
                  {hotel.amenities.map((a) => (
                    <span key={a} className="amenity-tag">
                      {a}
                    </span>
                  ))}
                </div>

                <div className="booking-info">
                  <div className="price-details">
                    <p className="starting-from">Starting from</p>
                    <p className="price">
                      <strong>₹{hotel.price}</strong>
                      <span className="per-night">per night</span>
                    </p>
                  </div>
                  <div className="card-actions">
                    <button className="view-details-btn">View Details</button>
                    <button
                      className="book-now-btn"
                      onClick={() => handleBook(hotel)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
