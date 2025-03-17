export default (APP, settings) => {
  console.log("Is this on?");

  if (localStorage.getItem("settings")) {
    let preferences = JSON.parse(localStorage.getItem("settings"));
    console.log("Preferences found:", preferences);
    return preferences;
  } else {
    APP.methods.store(settings);
    console.log("No settings found. Using default settings.");
    return settings;
  }
};
