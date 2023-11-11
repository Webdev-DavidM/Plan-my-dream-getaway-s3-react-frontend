import { Grid } from "@mui/material";
import AutoCompletePlace from "./AutoCompletePlace";
import PopularDestinations from "./PopularDestinations";

function SelectPlace() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        // minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "column",
        // width: "100%",
        backgroundColor: "white",
        border: "1px solid red",
        marginTop: "20vh",
      }}
    >
      <AutoCompletePlace />
      <PopularDestinations />
    </Grid>
  );
}

export default SelectPlace;
