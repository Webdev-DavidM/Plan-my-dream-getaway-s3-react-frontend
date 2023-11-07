// Mui
import { Grid } from "@mui/material";

// Script
import loadGooglePlaces from "../../../config/loadGooglePlaces";

// Components
import AutoComplete from "./AutoComplete";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const TripDetails = (props: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [key, setKey] = useState("");

  const getData = async () => {
    const credentials = await axios.get(
      `https://api-dev.planmydreamgetaway.co.uk/getCredentials`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setKey(credentials?.data?.key);
  };

  useEffect(() => {
    if (!key) {
      getData();
    } else {
      loadGooglePlaces(key, () => {
        return setLoaded(true);
      });
    }
  }, [key]);

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
      {loaded && <AutoComplete key={key} />}
    </Grid>
  );
};

export default TripDetails;
