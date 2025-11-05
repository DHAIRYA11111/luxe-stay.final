import React from "react";
import { useNavigate } from "react-router-dom";
import { HotelCard } from "../components/HotelCard"; // CRITICAL FIX

export function Home() { // CRITICAL FIX
  const navigate = useNavigate();
  const featuredHotels = [
    {
      title: "The Leela Palace",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      desc: "Luxury 5-star hotel in New Delhi with royal architecture."
    },
    {
      title: "Taj Lake Palace",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      desc: "Floating palace in Udaipur with lake views and premium suites."
    },
    {
      title: "JW Marriott Goa",
      image: "https://images.unsplash.com/photo-1590490359683-3d972449bd8c",
      desc: "Beachfront resort offering fine dining and spa experiences."
    }
  ];

  return (
    <>
      {/* Basic Hero Section Styling Placeholder */}
      <div className="hero" style={{ textAlign: 'center', padding: '100px 0', background: 'url(https://images.unsplash.com/photo-1551882547-ff40c637faad) no-repeat center/cover', color: 'white' }}>
        <h1 style={{fontSize: '3em', textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Experience Luxury Like Never Before</h1>
        <button
            onClick={() => navigate("/hotels")}
            style={{
                marginTop: '20px',
                padding: '10px 30px',
                backgroundColor: '#c59d5f',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
            }}
        >
            Explore Hotels
        </button>
      </div>
      
      <div style={{textAlign: 'center', padding: '50px 0', fontSize: '1.5em', fontWeight: 'bold'}}>Featured Destinations</div>

      <div className="hotels-grid" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {featuredHotels.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}
      </div>
    </>
  );
}
