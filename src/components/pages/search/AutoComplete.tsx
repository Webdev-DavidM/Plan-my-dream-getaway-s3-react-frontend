import { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const options = ["Option 1", "Option 2"];

  const acService = new google.maps.places.AutocompleteService();
  const predictions = () => {
    acService.getPlacePredictions(
      {
        input: inputValue,
        types: ["geocode"],
      },
      function (predictions, status) {
        console.log(predictions);
        console.log(status);
      }
    );
  };

  useEffect(() => {
    predictions();
  }, [inputValue]);

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
};
export default AutoComplete;
