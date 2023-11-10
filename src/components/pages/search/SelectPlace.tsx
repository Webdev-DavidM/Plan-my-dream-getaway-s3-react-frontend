import { Grid } from "@mui/material";
import AutoCompletePlace from "./AutoCompletePlace";
import PopularDestinations from "./PopularDestinations";

function SelectPlace() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "75vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <AutoCompletePlace />
      <PopularDestinations />
    </Grid>
  );
}

export default SelectPlace;
