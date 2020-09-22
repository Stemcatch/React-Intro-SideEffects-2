import React, { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "./PetCard";

export default function PetGrid() {
  // Step 2 - Set up state for application
  const [petData, setPetData] = useState([]); // holds data from the API
  const [breed, setBreed] = useState("mix"); // breed variable varies based on buttons pressed in UI
  // Step 6 - Add new state to manage breed

  // Step 1 - Set up useEffect
  // effect fn is called ALWAYS after initial render of your JSX
  // effect fn will also be called if EITHER the breed or the numberOfImg variable changes
  const effectFn = () => {
    // a change in breed OR a change in numberOfImg will change the API request

    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
      .then((res) => {
        // the new request will return NEW DATA and we'll update our petdata here.
        setPetData(res.data.message); // petData === array of image URLS
      });
  };
  useEffect(effectFn, [breed]);

  // Step 3 - Capture API response into state.
  // Step 7 - Update Axios URL to use state breed variable instead of the hardcoded "hound" breed.
  // Step 9 - Use dependency array to trigger another useEffect request when breed state changes.
  // https://dog.ceo/api/breed/hound/images/random/15

  return (
    <div className="container">
      {/* Step 8 - Add buttons to change breed to mastiff or lab */}

      <button onClick={() => setBreed("mastiff")}>Mastiff</button>
      <button onClick={() => setBreed("labrador")}>Lab</button>

      <div className="entry">
        {/* Step 4 - Iterate over stately data to return PetCard for each item in petData state. */}
        {/* Changed petData will update and new PetCard components will render with new breeds or number of Cards */}

        {petData.map((pet) => (
          <PetCard key={pet} imgUrl={pet} breed={breed} />
        ))}
      </div>
    </div>
  );
}
