import React from "react";
import { useNavigate } from "react-router-dom";

export function HotelCard({ title, image, desc }) { // CRITICAL FIX
  const navigate = useNavigate();
  return (
    <div className="hotel-card" style={{ width: '300px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden', background: 'white' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{padding: '15px'}}>
        <h3 style={{marginTop: '0'}}>{title}</h3>
        <p style={{color: '#666', fontSize: '14px'}}>{desc}</p>
        <button
            onClick={() => navigate("/hotels")}
            style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#c59d5f',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
            }}
        >
            Explore Options
        </button>
      </div>
    </div>
  );
}
