// Components
import SelectPlace from "./SelectPlace";

// Redux
import { useAppSelector } from "../../../hooks/hooks";
import Selectinterests from "./Selectinterests";
import SelectTravellers from "./SelectTravellers";

type Props = {};

const Search = (props: Props) => {
  let step = useAppSelector((state) => state.user.searchStep);

  return (
    <>
      {step === 1 && <SelectPlace />}
      {step === 2 && <Selectinterests />}
      {step === 3 && <SelectTravellers />}
    </>
  );
};

export default Search;
