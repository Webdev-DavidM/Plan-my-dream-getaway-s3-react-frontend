// Mui
import { Grid } from "@mui/material";

// Script
import loadGooglePlaces from "../../../config/loadGooglePlaces";

// Components
import AutoComplete from "./AutoComplete";
import { useEffect, useState } from "react";

type Props = {};

const TripDetails = (props: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadGooglePlaces(() => {
      return setLoaded(true);
    });
  }, []);

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
      {loaded && <AutoComplete />}
    </Grid>
  );
};

export default TripDetails;
