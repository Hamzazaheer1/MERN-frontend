import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const UserPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/places/user/${userId}`
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedPlaces(responseData.places);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    fetchPlaces();
    //just hiding a warning of React Hook useEffect has a missing dependency: ''. Either include it or remove the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
    </React.Fragment>
  );
};

export default UserPlaces;
