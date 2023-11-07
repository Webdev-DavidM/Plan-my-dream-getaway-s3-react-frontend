import { useRef, useEffect } from "react";

const AutoComplete = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  // Here I can set up the api call to the backend to get the open data

  console.log({ autoCompleteRef });
  useEffect(() => {
    // @ts-ignore
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        fields: ["name"],
        types: ["geocode"],
      }
    );

    // This case below returns the place selected by the user so I can use this query my backend
    // for the open ai
    // @ts-ignore
    autoCompleteRef.current.addListener("place_changed", async function () {
      // @ts-ignore
      const place = await autoCompleteRef?.current.getPlace();
      console.log({ place });
    });
  }, []);

  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} />
    </div>
  );
};
export default AutoComplete;
