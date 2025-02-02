import React from 'react';
import Adpart from './Adpart';
import Trending from './Trending';
import MostBooking from './MostBooking';
import ExistingTrip from './ExistingTrip';
function Home() {
  return (
    <>
      <div>
        <Adpart />
        <Trending />
        <MostBooking />
        <ExistingTrip />
      </div>
    </>
  );
}

export default Home;