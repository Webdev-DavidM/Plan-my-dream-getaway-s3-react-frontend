// Mui
import { Grid } from "@mui/material";

// Script

// Components
import AutoComplete from "./AutoComplete";

type Props = {};

const TripDetails = (props: Props) => {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   loadGooglePlaces(() => {
  //     return setLoaded(true);
  //   });
  // }, []);

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
      {/* {loaded && <AutoComplete />} */}
      <AutoComplete />
    </Grid>
  );
};

export default TripDetails;
