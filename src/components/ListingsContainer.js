import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([])

  useEffect( () => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])

  const filteredListings = listings.filter((listing) => {
    const loweredCaseDescription = listing.description.toLowerCase(); 
    const loweredCaseLocation = listing.location.toLowerCase(); 
    const loweredCaseSearch = search.toLowerCase(); 

    return (
        loweredCaseDescription.includes() || loweredCaseLocation.includes(loweredCaseSearch)
    )
  }); 

  const renderListings = filteredListings.map((listing) => (
    <ListingCard key={listing.id} listing={listing} setListings={setListings} />
  ))

  return (
    <main>
      <ul className="cards">
       {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
