import React from "react";
import { Link } from "react-router-dom";

// components
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import RoomsContainer from "../Components/RoomContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms" subtitle="">
          <Link to="/" className="btn-primary">
            return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer/>
    </>
  );
};

export default Rooms;
