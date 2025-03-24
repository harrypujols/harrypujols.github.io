export default (APP, data) => {
  if (localStorage.getItem("settings")) {
    let preferences = JSON.parse(localStorage.getItem("settings"));
    console.log("Preferences found:", preferences);
    return preferences;
  } else {
    APP.methods.store(data);
    console.log("No settings found. Using default settings.");
    return data;
  }
};
