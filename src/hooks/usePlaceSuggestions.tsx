import { useEffect, useState } from "react";
import axios from "axios";

type PlaceSuggestion = {
  description: string;
};

//maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyATV9iOWH5WTs8QFUgK4QDz_mGKl07OfVw

const usePlaceSuggestions = () => {
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyATV9iOWH5WTs8QFUgK4QDz_mGKl07OfVw`
      );
      //   const data = await response.json();
      //   console.log(data);
      console.log(response);
      //   setSuggestions(data.predictions);
    };

    fetchSuggestions();
  }, [query]);

  return { setQuery, suggestions };
};

export default usePlaceSuggestions;
