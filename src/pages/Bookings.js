import React, { useState } from "react";
import "../styles/Bookings.css"; // Corrected path

export function Bookings({ activeBookings, pastBookings }) { // CRITICAL FIX
  const [activeTab, setActiveTab] = useState("active");

  const allBookings = [...activeBookings, ...pastBookings];
  const filteredBookings = allBookings.filter(b => b.type === activeTab);
  
  const activeCount = activeBookings.length;
  const pastCount = pastBookings.length;

  return (
    <div className="bookings-page">
      {/* ... (rest of the JSX render code) */}
      <h2>My Bookings</h2>
      <p className="sub-header">Manage your hotel reservations</p>

      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active Bookings ({activeCount})
        </button>
        <button
          className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past Bookings ({pastCount})
        </button>
      </div>

      <div className="bookings-list">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className={`status-tag ${booking.status.toLowerCase()}`}>
                {booking.status === 'CONFIRMED' && 'CONFIRMED'}
                {booking.status === 'PENDING' && 'PENDING'}
              </div>

              <div className="card-main-content">
                <img src={booking.image} alt={booking.hotelName} className="booking-image" />
                
                <div className="booking-details">
                  <div className="details-header">
                    <h3 className="hotel-name">{booking.hotelName}</h3>
                    <p className="total-amount">Total Amount: <span>₹{booking.totalAmount}</span></p>
                  </div>
                  <p className="city-location">{booking.city}</p>

                  <div className="info-row date-row">
                    <p>Check-in: <span>{booking.checkIn}</span></p>
                    <p>Check-out: <span>{booking.checkOut}</span></p>
                    <p>Guests: <span>{booking.guests}</span></p>
                    <p>Room: <span>{booking.roomType}</span></p>
                  </div>
                  
                  <p className="booking-ref">Booking Reference: <span>{booking.id}</span></p>

                  <div className="card-actions-bookings">
                    <button className="view-details-btn">View Details</button>
                    {booking.status !== 'COMPLETED' && (
                        <button className="cancel-btn">Cancel Booking</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-bookings">You have no {activeTab} bookings right now.</p>
        )}
      </div>
    </div>
  );
}
