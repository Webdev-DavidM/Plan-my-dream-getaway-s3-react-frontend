const loadGooglePlaces = async (key, callback) => {
  const existingScript = document.getElementById("googleMaps");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCBsdxQvERIzbM2CuT_0ZKJOBaBLaY6i8s&libraries=places`;

    script.id = "googleMaps";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };

    if (existingScript && callback) callback();
  }
};
export default loadGooglePlaces;
