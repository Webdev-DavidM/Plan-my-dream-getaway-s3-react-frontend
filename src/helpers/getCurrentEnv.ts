const appUrls = {
  dev: "development.planmydreamgetaway.co.uk",
  prod: "planmydreamgetaway.co.uk",
};

const apiBaseUrls = {
  dev: {
    lambda: "https://nmcshhyqq0.execute-api.eu-west-2.amazonaws.com/dev",
    ec2: "http://ec2-3-10-53-242.eu-west-2.compute.amazonaws.com:4000",
  },
  prod: {
    lambda: "https://nmcshhyqq0.execute-api.eu-west-2.amazonaws.com/dev",
    ec2: "http://ec2-3-10-53-242.eu-west-2.compute.amazonaws.com:4000",
  },
  local: {
    lambda: "http://localhost:3000/dev",
    ec2: "http://localhost:4000",
  },
};

// I have some of my backend hosted on AWS lambda and some hosted on a EC2, the reason being is openAi can take more than 30 seconds to respond and lambda has a 30 second timeout.
// So all google maps api calls are via an API gateway lambda and all openAi calls are via the EC2. So need to know if it is a lambda call or EC2 call.
// to provide the correct base url for the api call.

const getCurrentEnvURL = (EC2 = true) => {
  let env = "local";
  if (appUrls["dev"] === window.location.hostname) env = "dev";
  if (appUrls["prod"] === window.location.hostname) env = "prod";
  console.log(EC2 ? apiBaseUrls[env]["ec2"] : apiBaseUrls[env]["lambda"]);
  return EC2 ? apiBaseUrls[env]["ec2"] : apiBaseUrls[env]["lambda"];
};

export default getCurrentEnvURL;
