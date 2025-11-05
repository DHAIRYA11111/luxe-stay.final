import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// CRITICAL FIX: Changed to Named Imports
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Hotels } from "./pages/Hotels";
import { Bookings } from "./pages/Bookings";
import "./App.css";

// Helper function to create a unique ID for a booking
const generateBookingId = (bookings) => {
  const count = bookings.length + 1;
  return "BKR" + String(count).padStart(3, '0');
};

export default function App() {
  // Initial bookings state, including the data from your screenshots
  const [activeBookings, setActiveBookings] = useState([
    {
      id: "BKR001",
      status: "CONFIRMED",
      hotelName: "Grand Taj Palace",
      city: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1590073242678-7067884d7237?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      checkIn: "2024-02-15",
      checkOut: "2024-02-18",
      guests: 2,
      roomType: "Deluxe Room",
      totalAmount: "10,500",
      type: "active"
    },
    {
      id: "BKR002",
      status: "PENDING",
      hotelName: "Goa Beach Resort",
      city: "Goa, India",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      checkIn: "2024-03-01",
      checkOut: "2024-03-05",
      guests: 2,
      roomType: "Sea View Room",
      totalAmount: "18,000",
      type: "active"
    },
  ]);
  
  const [pastBookings, setPastBookings] = useState([
    {
      id: "BKR003",
      status: "COMPLETED",
      hotelName: "Royal Jaipur Hotel",
      city: "Jaipur, India",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      checkIn: "2023-12-01",
      checkOut: "2023-12-03",
      guests: 1,
      roomType: "Standard Suite",
      totalAmount: "8,400",
      type: "past"
    },
  ]);


  const addBooking = (hotel) => {
    const newBooking = {
      id: generateBookingId([...activeBookings, ...pastBookings]),
      status: "CONFIRMED",
      hotelName: hotel.name,
      city: hotel.city,
      image: hotel.img,
      checkIn: "2024-06-01",
      checkOut: "2024-06-05",
      guests: 2,
      roomType: "Standard Room",
      totalAmount: hotel.price.toLocaleString(),
      type: "active"
    };
    setActiveBookings((prev) => [...prev, newBooking]);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels onBookNow={addBooking} />} />
        <Route
          path="/bookings"
          element={
            <Bookings
              activeBookings={activeBookings}
              pastBookings={pastBookings}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
