// Components
import Header from "../../Header";
import BottomNavBar from "../../Footer";
import SelectPlace from "./SelectPlace";
import ProgressBar from "./ProgressBar";

// Redux
import { useAppSelector } from "../../../hooks/hooks";
import Selectinterests from "./Selectinterests";
import SelectTravellers from "./SelectTravellers";

type Props = {};

const Search = (props: Props) => {
  let step = useAppSelector((state) => state.user.searchStep);

  return (
    <>
      <Header />
      <ProgressBar />
      {step === 0 && <SelectPlace />}
      {step === 1 && <Selectinterests />}
      {step === 2 && <SelectTravellers />}

      <BottomNavBar />
    </>
  );
};

export default Search;
