import React from "react";

const PetCard = (props) => {
  // Step 5 - Update PetCard to use prop data

  return (
    <div className="dog-card">
      <img className="dog-image" alt="random dog" src={props.imgUrl} />
      <h2>{props.breed}</h2>
    </div>
  );
};
export default PetCard;
