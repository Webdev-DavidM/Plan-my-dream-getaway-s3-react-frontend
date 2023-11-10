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
import Search from "./components/pages/search/Search";
import { Grid } from "@mui/material";

function App() {
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

        position: "relative",

        backgroundColor: "white",
        // justifyContent: "space-between",
      }}
    >
      <Search />

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
