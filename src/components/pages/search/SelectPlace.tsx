import { Grid } from "@mui/material";
import Header from "../../Header";
import AutoCompletePlace from "./AutoCompletePlace";
import BottomNavBar from "./BottomNavBar";

type Props = {};

function SelectPlace({}: Props) {
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
      <AutoCompletePlace />
    </Grid>
  );
}

export default SelectPlace;
