// Components
import Header from "../../Header";
import BottomNavBar from "../../Footer";
import SelectPlace from "./SelectPlace";
import ProgressBar from "./ProgressBar";

// Redux
import { useAppSelector } from "../../../hooks/hooks";
import Selectinterests from "./Selectinterests";
import SelectTravellers from "./SelectTravellers";
import { Grid } from "@mui/material";

type Props = {};

const Search = (props: Props) => {
  let step = useAppSelector((state) => state.user.searchStep);

  return (
    <Grid container xs={12}>
      <Header />
      <ProgressBar />
      {step === 1 && <SelectPlace />}
      {step === 2 && <Selectinterests />}
      {step === 3 && <SelectTravellers />}

      <BottomNavBar />
    </Grid>
  );
};

export default Search;
