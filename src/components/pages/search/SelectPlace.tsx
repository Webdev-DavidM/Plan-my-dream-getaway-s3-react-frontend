import { Grid } from "@mui/material";
import AutoCompletePlace from "./AutoCompletePlace";

type Props = {};

function SelectPlace({}: Props) {
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
