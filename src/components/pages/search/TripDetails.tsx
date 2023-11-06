// Mui
import { Grid } from "@mui/material";

// Components
import AutoComplete from "./AutoComplete";

type Props = {};

const TripDetails = (props: Props) => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "80vh",
        width: "100vw",
        // backgroundColor: "blue",
      }}
    >
      <AutoComplete />
    </Grid>
  );
};

export default TripDetails;
