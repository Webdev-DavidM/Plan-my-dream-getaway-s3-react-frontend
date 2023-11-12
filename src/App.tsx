// import { consoleLog } from "./redux/userSlice";

// import Logo from "./icons/Logo";
// import Home from "./icons/Home";
// import Search from "./icons/Search";
// import Explore from "./icons/Explore";
// import Message from "./icons/Message";
// import Likes from "./icons/Likes";
// import Create from "./icons/Create";
// import WrittenLogo from "./icons/WrittenLogo";

// Components
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Status from "./components/Status";
// import { Account } from "./components/Account";
import BottomNavBar from "./components/Footer";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import { useAppSelector } from "./hooks/hooks";
import PageContainer from "./components/PageContainer";
import SelectPlace from "./components/pages/search/SelectPlace";
import Selectinterests from "./components/pages/search/Selectinterests";
import SelectTravellers from "./components/pages/search/SelectTravellers";

function App() {
  let step = useAppSelector((state) => state.user.searchStep);
  // let name = useAppSelector((state) => state.user.name);
  // console.log(name);
  //tested again with new develop branch!!
  // const dispatch = useAppDispatch();
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        position: "relative",
        p: 1,
        backgroundColor: "white",
        // justifyContent: "space-between",
      }}
    >
      <Header />

      <PageContainer>
        {step === 1 && <SelectPlace />}
        {step === 2 && <Selectinterests />}
        {step === 3 && <SelectTravellers />}
      </PageContainer>

      <BottomNavBar />

      {/* <Logo />
      <Home />
      <Search />
      <Explore />
      <Message />
      <Likes />
      <Create />
      <WrittenLogo />

      <button onClick={() => dispatch(consoleLog({ name: "bob" }))}>
        developed now updated to test again and again
      </button> */}
      {/* </Account> */}
    </Grid>
  );
}

export default App;
