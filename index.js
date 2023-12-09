const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const Movie = require("./models/Movie");
const Person = require("./models/Person");
const Language = require("./models/Language");
const Booking = require("./models/Booking");

const movieRoutes = require("./routes/movieRoutes");
const personRoutes = require("./routes/personRoutes");
const languageRoutes = require("./routes/languageRoutes");
const theatreRoutes = require("./routes/theatreRoutes");
const screenRoutes = require("./routes/screenRoutes");
const showRoutes = require("./routes/showRoutes");
const castRoutes = require("./routes/castRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/persons", personRoutes);
app.use("/movie", movieRoutes);
app.use("/languages", languageRoutes);
app.use("/casts", castRoutes);
app.use("/theatres", theatreRoutes);
app.use("/screens", screenRoutes);
app.use("/shows", showRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

main()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  const urlWithPassword = databaseUrl.replace(
    "<password>",
    process.env.DB_PASSWORD
  );

  await mongoose.connect(urlWithPassword);
}
