import { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(false);
  // @ts-ignore comment
  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then((session) => {
        console.log("Session: ", session);
        setStatus(true);
      })
      .catch((err) => {
        console.log("Session: ", err);
        setStatus(false);
      });
  }, [status, getSession]);

  console.log(status);

  return (
    <div>
      {status ? (
        <div>
          {" "}
          You are logged in.
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        "Please Login"
      )}
    </div>
  );
};

export default Status;
