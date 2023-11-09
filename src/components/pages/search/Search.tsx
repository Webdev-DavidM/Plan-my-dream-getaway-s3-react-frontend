// Components
import { Grid } from "@mui/material";
import Header from "../../Header";
import BottomNavBar from "./BottomNavBar";
import SelectPlace from "./SelectPlace";

type Props = {};

const Search = (props: Props) => {
  return (
    <Grid container>
      <Header />
      <SelectPlace />
      <BottomNavBar />
    </Grid>
  );
};

export default Search;
