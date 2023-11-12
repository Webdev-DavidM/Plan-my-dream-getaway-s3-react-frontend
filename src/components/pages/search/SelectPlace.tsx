import { Grid } from "@mui/material";
import AutoCompletePlace from "./AutoCompletePlace";
import PopularDestinations from "./PopularDestinations";

function SelectPlace() {
  return (
    <Grid container justifyContent={"center"}>
      <AutoCompletePlace />
      <PopularDestinations />
    </Grid>
  );
}

export default SelectPlace;
