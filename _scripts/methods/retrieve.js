export default (APP, data) => {
  if (localStorage.getItem("data")) {
    let preferences = JSON.parse(localStorage.getItem("data"));
    console.log("Preferences found:", preferences);
    return preferences;
  } else {
    APP.methods.store(data);
    console.log("No data found. Using default data.");
    return data;
  }
};
