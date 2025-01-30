import React from 'react';
import Adpart from './Adpart';
import Trending from './Trending';
import MostBooking from './MostBooking';
import ExistingTrip from './ExistingTrip';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />
      <div className="pt-[28vh]">
        <Adpart />
        <Trending />
        <MostBooking />
        <ExistingTrip />
      </div>
    </>
  );
}

export default Home;