// import axios from "axios";

const appUrls = {
  local: ["localhost"],
  dev: ["development.planmydreamgetaway.co.uk"],
  prod: ["planmydreamgetaway.co.uk"],
};

const apiBaseUrls = {
  dev: "development.planmydreamgetaway.co.uk",
  prod: "planmydreamgetaway.co.uk",
};

const getCurrentEnv = () => {
  if (appUrls["localhost"].includes(window.location.hostname)) return "local";
  //   if (appUrls["dev"] === window.location.hostname) return "dev";
  return "prod";
};

const currentEnv = getCurrentEnv();

console.log(">>> [Axios] Current env: ", currentEnv);
// const currentEnv = "prod";
// localStorage.setItem("currentEnv", currentEnv);

export const API_BASE_URL = apiBaseUrls[currentEnv];

// commented out for now until I have set up authorization on the app

// Add header to Axios request
// axios.defaults.headers.common["Authorization"] =
//   localStorage.getItem("access_token") || "NOT_PROVIDED";

// // Create Axios instance
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     // "ocp-apim-subscription-key": API_SUBSCRIPTION_KEY,
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (localStorage.getItem("devMode") === "on") return Promise.reject(error);

//     const isAuthError = [401, 403].includes(error?.response?.status);

//     const notLogInPage = window.location.pathname !== "/login";

//     if (isAuthError && notLogInPage) {
//       console.error(">>> [Axios] Auth error");

//       window.location.href = "/unauthorised";
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;
