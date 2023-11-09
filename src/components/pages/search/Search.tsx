// Components
import { Grid } from "@mui/material";
import Header from "../../Header";
import BottomNavBar from "../../Footer";
import SelectPlace from "./SelectPlace";

import ProgressBar from "./ProgressBar";

type Props = {};

const Search = (props: Props) => {
  return (
    <>
      <Header />
      <ProgressBar />
      <SelectPlace />
      <BottomNavBar />
    </>
  );
};

export default Search;
