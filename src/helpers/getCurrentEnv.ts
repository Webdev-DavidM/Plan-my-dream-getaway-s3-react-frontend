const appUrls = {
  dev: "development.planmydreamgetaway.co.uk",
  prod: "planmydreamgetaway.co.uk",
};

const apiBaseUrls = {
  dev: "https://api-dev.planmydreamgetaway.co.uk/topFivePlaces",
  prod: "https://api-dev.planmydreamgetaway.co.uk/topFivePlaces",
  local: "http://localhost:3000/dev",
};

// I have some of my backend hosted on AWS lambda and some hosted on a EC2, the reason being is openAi can take more than 30 seconds to respond and lambda has a 30 second timeout.
// So all google maps api calls are via an API gateway lambda and all openAi calls are via the EC2. So need to know if it is a lambda call or EC2 call.
// to provide the correct base url for the api call.

const getCurrentEnvURL = () => {
  let env = "local";
  if (appUrls["dev"] === window.location.hostname) env = "dev";
  if (appUrls["prod"] === window.location.hostname) env = "prod";
  return apiBaseUrls[env];
};

export default getCurrentEnvURL;
