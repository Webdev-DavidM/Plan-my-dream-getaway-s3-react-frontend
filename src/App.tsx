import React from "react";
import { consoleLog } from "./redux/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import Logo from "./icons/Logo";
import Home from "./icons/Home";
import Search from "./icons/Search";
import Explore from "./icons/Explore";
import Message from "./icons/Message";
import Likes from "./icons/Likes";
import Create from "./icons/Create";
import WrittenLogo from "./icons/WrittenLogo";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Status from "./components/Status";
import { Account } from "./components/Account";

function App() {
  let name = useAppSelector((state) => state.user.name);
  console.log(name);
  //tested again with new develop branch!!
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <Account>
        <Signup />
        <Status />
        <Login />
        tested again
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
      </Account>
    </div>
  );
}

export default App;
