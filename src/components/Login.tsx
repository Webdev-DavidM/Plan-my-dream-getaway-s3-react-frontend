import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useState } from "react";
import { UserPool } from "./UserPool";
import axios from "axios";
import jwtDecode from "jwt-decode";

function Login() {
  //   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const url = "https://jx49asahxi.execute-api.eu-west-2.amazonaws.com/dev";

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log("login success", result.getIdToken().getJwtToken());

        const headers = {
          Authorization: `${result.getIdToken().getJwtToken()}`,
          "Content-Type": "application/json",
        };

        axios
          .get(url, { headers })
          .then((response) => {
            console.log("Response:", response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      onFailure: (err) => {
        console.log("login failure", err);
      },
      newPasswordRequired: (data) => {
        console.log("new password required", data);
      },
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
