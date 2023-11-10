import { Grid } from "@mui/material";
import AutoCompletePlace from "./AutoCompletePlace";

function SelectPlace() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "75vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AutoCompletePlace />
    </Grid>
  );
}

export default SelectPlace;
