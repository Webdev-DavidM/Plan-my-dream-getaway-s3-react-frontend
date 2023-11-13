import { Grid, useMediaQuery, useTheme } from "@mui/material";
import AutoCompletePlace from "./AutoCompletePlace";
import PopularDestinations from "./PopularDestinations";

function SelectPlace() {
  const theme = useTheme();
  const notLarge = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        paddingTop: notLarge ? "40vh" : "20vh",
        paddingBottom: notLarge ? "20vh" : "null",
      }}
    >
      <AutoCompletePlace />
      <PopularDestinations />
    </Grid>
  );
}

export default SelectPlace;
