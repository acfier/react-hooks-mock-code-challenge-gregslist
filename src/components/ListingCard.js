import React, {useState} from "react";

function ListingCard({ listing, setListings }) {
  const {description, id, image, location} = listing
  const [favorited, setFavorited] = useState(false)

  function handleFavorited() {
    setFavorited(true); 
  }

  function handleUnfavorite() {
    setFavorited(false)
  }

 function handleDeleteClick() {
  fetch( `http://localhost:6001/listings/${id}`, {
    method: "DELETE",
  }); 

  setListings( (currentListings) => 
    currentListings.filter((listing) => listing.id !== id)
    );
 }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} /> 
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleUnfavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorited}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
