const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/weather", async (req, res) => {
  try {
    const city = req.body.city;

    // Geocoding (city → lat/long)
    const geoRes = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    if (!geoRes.data.results) {
      return res.render("result", { error: "City not found" });
    }

    const { latitude, longitude, name } = geoRes.data.results[0];

    // Weather forecast
    const weatherRes = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_probability_max&timezone=auto`
    );

    const rainChance =
      weatherRes.data.daily.precipitation_probability_max[1];

    res.render("result", {
      city: name,
      rainChance,
      error: null
    });

  } catch (error) {
    console.error(error);
    res.render("result", { error: "Unable to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

