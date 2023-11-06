import { useRef, useEffect } from "react";

const AutoComplete = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ["name"],
    types: ["geocode"],
  };
  // Here I can set up the api call to the backend to get the open data

  console.log({ autoCompleteRef });
  useEffect(() => {
    // @ts-ignore
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    // @ts-ignore
    autoCompleteRef.current.addListener("place_changed", async function () {
      // @ts-ignore
      const place = await autoCompleteRef?.current.getPlace();
      console.log({ place });
    });
  }, []);

  // useEffect(() => {
  //   if (autoCompleteRef.current) {
  //     // @ts-ignore
  //     autoCompleteRef.current.addListener("place_changed", async function () {
  //       const place = await autoCompleteRef?.current.getPlace();
  //       console.log({ place });
  //     });
  //   }
  // }, [autoCompleteRef.current]);

  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} />
    </div>
  );
};
export default AutoComplete;
