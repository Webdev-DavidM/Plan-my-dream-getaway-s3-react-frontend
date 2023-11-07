import axios from "axios";

const loadGooglePlaces = async (callback) => {
  const existingScript = document.getElementById("googleMaps");
  if (!existingScript) {
    const credentials = await axios.get(
      `https://api-dev.planmydreamgetaway.co.uk/getCredentials`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${credentials?.data?.key}&libraries=places`;

    script.id = "googleMaps";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };

    if (existingScript && callback) callback();
  }
};
export default loadGooglePlaces;
