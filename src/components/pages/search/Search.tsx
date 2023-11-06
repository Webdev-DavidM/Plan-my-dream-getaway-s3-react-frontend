// Components
import Header from "./Header";
import BottomNavBar from "./BottomNavBar";
import TripDetails from "./TripDetails";

type Props = {};

const Search = (props: Props) => {
  return (
    <>
      <Header />
      <TripDetails />
      <BottomNavBar />
    </>
  );
};

export default Search;
