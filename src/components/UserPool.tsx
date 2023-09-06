// third-party
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "eu-west-2_1wTzJTK0G",
  ClientId: "26vqh0e9iqvnlvp0o2ump5c24q",
};

export const UserPool = new CognitoUserPool(poolData);
